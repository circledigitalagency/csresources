import { MetaFunction } from "@remix-run/react";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";

export const meta: MetaFunction = () => {
	return [{ title: "Agricultural Commodities" }];
};

const Page = () => {
	return (
		<MainLayout>
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col space-y-28 w-[90%]">
					<div className="flex flex-col space-y-10 w-full justify-center items-center">
						<Header
							title="Supporting South Africa's Agricultural Sector"
							fontSize="text-3xl"
						/>
						<p className="sm:w-2/3 text-center">
							Our{" "}
							<span className="font-medium text-lightBlue">
								agricultural commodities division
							</span>{" "}
							plays a significant role in supporting the agricultural sector by{" "}
							<span className="font-medium text-lightBlue">
								supplying high-demand products{" "}
							</span>
							reliably and sustainably.
						</p>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Maize: Our Key Export</p>
							<p>
								We are a major supplier of both yellow and white maize, a staple
								food crop in South Africa and internationally. Sourced from
								reputable farms, our maize consistently meets the highest
								quality standards. We supply this essential product to local
								markets and export to international clients, serving food
								processing industries, commercial operations, and more.
							</p>
						</div>
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="sm:block hidden"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/maze.jpg" alt="maze" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Other Agricultural Products</p>
							<p>In addition to maize, our offerings include:</p>
							<ul className="list-disc flex flex-col gap-4 px-5 text-sm">
								<li>Wheat</li>
								<li>Soybeans</li>
								<li>Sunflower seeds</li>
								<li>Sorghum</li>
							</ul>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Fueling Farm Operations</p>
							<p>
								We understand the energy needs of modern farming and provide
								bulk diesel to efficiently power farming equipment and
								machinery.
							</p>
						</div>
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="sm:block hidden"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/maze.jpg" alt="maze" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">
								Commitment to Sustainability
							</p>
							<p>
								Cornerstone Resources 411 is committed to the long-term
								sustainability of the agricultural sector, offering reliable
								solutions that support efficient and responsible farming
								operations.
							</p>
						</div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Page;
