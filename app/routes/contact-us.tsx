import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import {
	json,
	MetaFunction,
	useActionData,
	useLoaderData,
	Form,
	useNavigation,
} from "@remix-run/react";
import GoogleMap from "~/components/google-map";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";
import { LoaderData } from "~/lib/types";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import * as nodemailer from "nodemailer";
import { useEffect, useRef, useTransition } from "react";
import { toast } from "~/hooks/use-toast";
import BackgroundImageContainer from "~/components/bg-image";

export const meta: MetaFunction = () => {
	return [{ title: "Contact us" }];
};

export const loader = async ({}: LoaderFunctionArgs) => {
	const apiKey = process.env.GOOGLE_MAPS_API_KEY;

	if (!apiKey) {
		throw new Error("Google Maps API key is missing");
	}

	return json<LoaderData>({ apiKey });
};

type ActionData = {
	success: boolean;
	errors?: Record<string, string[]>;
	formErrors?: string;
};

export async function action({ request }: ActionFunctionArgs) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	const result = formSchema.safeParse(data);

	if (!result.success) {
		return json<ActionData>({
			success: false,
			errors: result.error.flatten().fieldErrors,
		});
	}

	const validatedData = result.data;

	try {
		const transporter = nodemailer.createTransport({
			//service: "gmail",
			host: "mail.csresources.co.za",
			port: 465,
			secure: true,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: validatedData.email,
			to: "info@csresources.co.za",
			replyTo: validatedData.email,
			subject: `Contact Form Submission from ${validatedData.name}`,
			text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Phone: ${validatedData.phone || "Not provided"}
          
          Message:
          ${validatedData.message}
        `,
			html: `
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${
						validatedData.phone || "Not provided"
					}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
        `,
		});

		return json<ActionData>({ success: true });
	} catch (error) {
		return json<ActionData>({
			success: false,
			formErrors: "Failed to send email. Please try again later.",
		});
	}
}

const formSchema = z.object({
	name: z.string().min(2, "Name is required").max(50),
	email: z.string().email(),
	phone: z.string(),
	message: z.string().min(2, "Message is required").max(150),
});

const Page = () => {
	const { apiKey } = useLoaderData<typeof loader>();
	const actionData = useActionData<ActionData>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";
	const $form = useRef<HTMLFormElement>(null);

	useEffect(() => {
		if (actionData?.success) {
			toast({
				title: "Thank you!",
				description: "Your message has been sent! We'll be in touch soon.",
				variant: "default",
			});
			$form.current?.reset();
		} else if (!actionData?.success && !!actionData?.formErrors) {
			toast({
				title: "Error",
				description:
					"We're having trouble sending your message. Please try again shortly.",
				variant: "destructive",
			});
		}
	}, [actionData?.success]);

	return (
		<MainLayout>
			<BackgroundImageContainer bgImage="bg-contact-bg-image py-28">
				<div className="flex flex-col justify-center items-center space-y-28">
					<div className="flex flex-col space-y-28 w-[90%] sm:px-40">
						<Header title="Contact us" fontSize="text-3xl" />
						<div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10">
							<Form method="post" className="space-y-5" ref={$form}>
								<Input
									label="Name"
									name="name"
									placeholder="Enter your name"
									error={actionData?.errors?.name}
								/>
								<Input
									label="Email"
									name="email"
									placeholder="Enter your email"
									error={actionData?.errors?.email}
								/>
								<Input
									label="Phone Number"
									name="phone"
									placeholder="Enter your phone number"
									error={actionData?.errors?.phone}
								/>
								<Input
									label="Message"
									name="message"
									placeholder="Enter your message"
									error={actionData?.errors?.message}
								/>
								<Button disabled={isSubmitting}>
									{isSubmitting ? "Sending..." : "Send"}
								</Button>
							</Form>

							<div className="aspect-[4/3] w-full">
								<iframe
									//src="https://www.google.com/maps/place/1+Tamchele+Ave,+Beverley,+Johannesburg,+2191/data=!4m2!3m1!1s0x1e9576cd930d6ad1:0x73f1f51ab903bf72?sa=X&ved=1t:242&ictx=111"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.204435516484!2d28.014553!3d-26.000125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957748196b936b%3A0x328d99067e0ce467!2s1%20Tamchele%20Ave%2C%20Beverley%2C%20Sandton%2C%20Johannesburg%2C%202191!5e0!3m2!1sen!2sza!4v1730134200000!5m2!1sen!2sza"
									width="100%"
									height="100%"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="CSResources Location"
									className="rounded-b-lg"
								/>
							</div>
						</div>
					</div>
				</div>
			</BackgroundImageContainer>
		</MainLayout>
	);
};

export default Page;
