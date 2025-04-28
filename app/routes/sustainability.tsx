import { MetaFunction } from "@remix-run/react";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";

export const meta: MetaFunction = () => {
	return [{ title: "Sustainability" }];
};

const Page = () => {
	return (
		<MainLayout>
			<div className="flex flex-col justify-center items-center space-y-28">
				<div className="flex flex-col space-y-28 w-[90%]">
					<Header
						title=" Delivering Value Through Excellence and Integrity"
						fontSize="text-3xl"
					/>
					<Accordion type="single" collapsible className="w-full sm:px-40">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								Operational Excellence & Network
							</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
									<li>
										Continuous Improvement: We are committed to the ongoing
										improvement of our processes, services, and product
										offerings to consistently meet and exceed client
										expectations.
									</li>
									<li>
										Technological Advancement: We embrace innovation and
										leverage technology to optimise logistics, enhance
										efficiency, and provide cutting-edge solutions.
									</li>
									<li>
										Risk Management: Robust risk management strategies are
										implemented across our supply chain to mitigate potential
										disruptions and ensure reliability and security.
									</li>
									<li>
										Strategic Partnerships: We cultivate strong, mutually
										beneficial partnerships with key industry players to
										optimise operations and service delivery.
									</li>
									<li>
										Distribution Network: With access to major allocations and a
										robust distribution infrastructure, supported by key
										suppliers, we efficiently supply commodities throughout
										South Africa.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-2">
							<AccordionTrigger>Quality, Compliance & Safety</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
									<li>
										Licensing & Compliance: As a licensed wholesale distributor,
										Cornerstone Resources 411 ensures all products (petroleum,
										coal, chrome, agricultural) comply with stringent industry
										regulations. We are authorised to handle a comprehensive
										range of petroleum products.
									</li>
									<li>
										Quality Assurance: We maintain rigorous quality control
										measures from sourcing to delivery. Our products undergo
										thorough testing to ensure consistency, reliability, and
										optimal performance.
									</li>
									<li>
										HSE Commitment: We are dedicated to environmentally
										responsible and sustainable operations, adhering to all
										Health, Safety, and Environment (HSE) regulations and
										continuously striving to improve our performance.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-3">
							<AccordionTrigger>Service & Support</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
									<li>
										Customer Service Excellence: We provide exceptional customer
										service, backed by a dedicated support team available 24/7
										to assist with inquiries and resolve issues promptly.
									</li>
									<li>
										Logistics and Delivery: Our reliable logistics system
										features a modern fleet and experienced drivers, ensuring
										timely and secure delivery of all commodities across any
										distance.
									</li>
									<li>
										Advanced Fuel Management: For petroleum clients, we offer
										advanced fuel management solutions designed to optimise
										consumption, improve efficiency, and reduce operational
										costs.
									</li>
									<li>
										Customised Solutions: We understand that each client has
										unique needs. We work closely with you to develop tailored
										solutions that deliver maximum value and cost-effectiveness.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="item-4">
							<AccordionTrigger>
								Sustainability & Community Focus
							</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
									<li>
										Beyond Business: At Cornerstone Resources 411, our
										commitment extends beyond commercial success to community
										empowerment, economic transformation, and long-term
										sustainability.
									</li>
									<li>
										Investing in Communities: We actively give back by investing
										in programs that promote social upliftment and environmental
										responsibility, supporting initiatives focused on education,
										skills development, and environmental conservation to ensure
										our operations contribute positively.
									</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="w-full h-96 relative">
					<img
						src="/assets/qa-footer.jpg"
						alt="qa"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50 z-10"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
