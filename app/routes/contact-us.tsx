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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
	Form as ShadcnForm,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import * as nodemailer from "nodemailer";
import { useState } from "react";

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

	console.log("result.success: ", result.success);
	console.log("validatedData: ", validatedData);

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
		console.error("Email error:", error);
		return json<ActionData>({
			success: false,
			formErrors: "Failed to send email. Please try again later.",
		});
	}
}

const formSchema = z.object({
	name: z.string().min(2, "Name is required").max(50),
	email: z.string().email().min(2, "Email is required").max(50),
	phone: z.string(),
	message: z.string().min(2, "Message is required").max(150),
});

const Page = () => {
	const { apiKey } = useLoaderData<typeof loader>();
	const actionData = useActionData<ActionData>();
	const navigation = useNavigation();
	const isSubmitting = navigation.state === "submitting";

	return (
		<MainLayout>
			<div className="flex flex-col justify-center items-center space-y-28">
				<div className="flex flex-col space-y-28 w-[90%] sm:px-40">
					<Header title="Contact us" fontSize="text-3xl" />
					<div className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10">
						{actionData?.success && (
							<div className="mb-4 p-4 bg-green-100 text-green-800 rounded">
								Thank you! Your message has been sent.
							</div>
						)}

						{actionData?.success === false && actionData.formErrors && (
							<div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
								{actionData.formErrors}
							</div>
						)}

						<Form method="post" className="space-y-5">
							<Input
								label="Name"
								name="name"
								placeholder="Enter your name"
								//error={actionData?.errors?.name}
							/>
							<Input
								label="Email"
								name="email"
								placeholder="Enter your email"
								//error={actionData?.errors?.email}
							/>
							<Input
								label="Phone Number"
								name="phone"
								placeholder="Enter your phone number"
								//error={actionData?.errors?.phone}
							/>
							<Input
								label="Message"
								name="message"
								placeholder="Enter your message"
								//error={actionData?.errors?.message}
							/>
							<Button disabled={isSubmitting}>
								{isSubmitting ? "Sending..." : "Send"}
							</Button>
						</Form>

						<GoogleMap
							apiKey={apiKey}
							center={{ lat: -25.9963, lng: 28.0308 }}
							zoom={12}
						/>
					</div>
				</div>

				<div className="w-full h-96 relative">
					<img
						src="/assets/contact-footer.jpg"
						alt="coal"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50 z-10"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
