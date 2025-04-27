import { MetaFunction } from "@remix-run/react";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";

export const meta: MetaFunction = () => {
	return [{ title: "Petroleum Commodities" }];
};

const Page = () => {
	return (
		<MainLayout>
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col space-y-28 w-[90%]">
					<div className="flex flex-col space-y-10 w-full justify-center items-center">
						<Header
							title="Reliable Petroleum Products to Fuel Your Business"
							fontSize="text-3xl"
						/>
						<p className="sm:w-2/3 text-center">
							Cornerstone Resources 411 remains a{" "}
							<span className="font-medium text-lightBlue">
								trusted supplier of high-quality petroleum products
							</span>
							, playing a critical role in fueling diverse industries and
							supporting essential infrastructure across South Africa.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/petro.jpg"
							alt="petro"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">
								Bulk Diesel: Our Core Offering
							</p>
							<p>
								High-quality bulk diesel is essential for industries ranging
								from construction and mining to agriculture and transportation,
								and it forms the core of our petroleum offering. We supply only
								the highest-quality bulk diesel that meets all South African
								Bureau of Standards (SABS) requirements and industry standards,
								ensuring reliability and optimal performance in all modern
								diesel engines.
							</p>
							<p>Key Specifications (Low Sulphur Diesel 50ppm):</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>Cetane Number: Minimum 50</li>
								<li>Density @ 20°C: Maximum 850 kg/m³</li>
								<li>Flash Point: Minimum 55°C</li>
								<li>Sulphur Content: Maximum 50 ppm</li>
								<li>Water Content: Maximum 200 ppm</li>
								<li>Appearance: Clear and bright</li>
							</ul>
						</div>
						<img
							src="/assets/petro.jpg"
							alt="petro"
							className="sm:block hidden"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/chrome-ore.jpg" alt="chrome" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Petrol</p>
							<p>
								We supply petrol tailored to meet the needs of commercial,
								industrial, and retail sectors.
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
							<p className="font-medium text-lg">Lubricants and Oils</p>
							<p>
								Our range includes high-quality lubricants and oils designed for
								vehicles, machinery, and various industrial equipment.
							</p>
						</div>
						<img
							src="/assets/extraction-footer.jpg"
							alt="other materials"
							className="sm:block hidden"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/extraction-footer.jpg" alt="other materials" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">
								Quality and Safety Assurance
							</p>
							<p>
								We focus on providing premium-quality petroleum products sourced
								exclusively from trusted suppliers. Our commitment ensures that
								customers receive products meeting stringent regulatory and
								safety standards.
							</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
