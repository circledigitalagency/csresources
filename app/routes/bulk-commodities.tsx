import { MetaFunction } from "@remix-run/react";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";

export const meta: MetaFunction = () => {
	return [{ title: "Bulk Commodities" }];
};

const Page = () => {
	return (
		<MainLayout>
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col space-y-28 w-[90%]">
					<div className="flex flex-col space-y-10 w-full justify-center items-center">
						<Header
							title="Expertise in Bulk Commodity Supply"
							fontSize="text-3xl"
						/>
						<p className="sm:w-2/3 text-center">
							Cornerstone Resources 411 specialises in the{" "}
							<span className="font-medium text-lightBlue">
								wholesale supply
							</span>{" "}
							of key bulk commodities, providing{" "}
							<span className="font-medium text-lightBlue">
								essential materials for energy generation
							</span>
							,{" "}
							<span className="font-medium text-lightBlue">
								industrial manufacturing
							</span>
							, <span className="font-medium text-lightBlue">construction</span>
							, and more across South Africa.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/coal-hero.jpg"
							alt="coal"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Coal</p>
							<p>
								Our coal division provides various grades tailored to meet
								diverse energy and industrial needs:
							</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>
									RBI Coal: High energy content, ideal for power generation.
								</li>
								<li>
									RB2 Coal: A cost-effective option suitable for various
									industrial applications.
								</li>
								<li>
									RB3 Coal: Reliable fuel for both power generation and
									industrial uses.
								</li>
								<li>
									RB4 Coal: An economical, lower calorific value coal for
									budget-conscious clients.
								</li>
								<li>
									Duff Coal: A byproduct utilised for specific industrial
									applications.
								</li>
								<li>
									Peas Coal: Small-sized coal commonly used for domestic and
									industrial heating.
								</li>
								<li>
									Run-of-Mine (ROM): Unprocessed coal sourced directly from the
									mine.
								</li>
								<li>
									Anthracite Coal: A key product used for domestic and
									industrial heating, steel production, and water filtration.
								</li>
							</ul>
						</div>
						<img
							src="/assets/coal-hero.jpg"
							alt="coal"
							className="sm:block hidden"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/chrome-ore.jpg" alt="chrome" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Chrome</p>
							<p>
								We supply vital chrome ore and ferrochrome, critical raw
								materials for producing stainless steel and other alloys. Our
								high-quality chrome products meet stringent specifications for
								durability and corrosion resistance required across industrial
								sectors.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/extraction-footer.jpg"
							alt="other materials"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Other Industrial Materials</p>
							<p>
								Our portfolio also includes a variety of other essential
								industrial-grade materials:
							</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>Iron Ore: Fundamental for steel manufacturing.</li>
								<li>
									Manganese: High-quality manganese alloy used in construction
									and industrial applications.
								</li>
								<li>
									Copper: Utilised extensively in construction, electronics, and
									various industrial processes.
								</li>
							</ul>
						</div>
						<img
							src="/assets/extraction-footer.jpg"
							alt="other materials"
							className="sm:block hidden"
						/>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
