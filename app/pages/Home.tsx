import { Link } from "@remix-run/react";
import LogoCarousel from "~/components/affiliate-carousel";
import Header from "~/components/header";
import HeroCarousel from "~/components/hero-carousel";
import MainLayout from "~/components/main-layout";
import { keyOfferings, commodities, affiliates } from "~/lib/data";
import { JusticeScale01Icon } from "hugeicons-react";
import AnimatedLink from "~/components/animated-link";

const Home = () => {
	return (
		<MainLayout>
			<div className="flex flex-col space-y-16">
				<HeroCarousel />
				<div className="sm:px-28 px-4 flex flex-col justify-center items-center space-y-12 py-10">
					<Header title="Cornerstone Resources 411" />
					<div className="sm:grid sm:grid-cols-2 flex flex-col gap-10 sm:w-[75%]">
						<div className="flex flex-col space-y-5">
							<p className="text-base font-light">
								A leading{" "}
								<span className="font-medium text-mainBlue">
									100% Black-owned
								</span>{" "}
								South African company specialising in the wholesale supply of
								crucial bulk commodities, agricultural goods, and petroleum
								products.
							</p>
							<AnimatedLink path="/about-us" title="Learn more" />
						</div>
						<div className="flex flex-col space-y-5">
							<p className="text-base font-light">
								As a{" "}
								<span className="font-medium text-mainBlue">
									Level 1 B-BBEE contributor
								</span>
								, we are deeply committed to fostering{" "}
								<span className="font-medium text-mainBlue">
									sustainable growth
								</span>
								, driving{" "}
								<span className="font-medium text-mainBlue">
									economic transformation
								</span>
								, and{" "}
								<span className="font-medium text-mainBlue">
									empowering local communities
								</span>
								, actively uplifting South Africa's economy. Partner with us for
								quality products and dedicated service.
							</p>
						</div>
						<Link
							to="/about-us"
							className="sm:hidden p-2 border border-1 border-black rounded-full text-sm w-32 items-center justify-center flex"
						>
							Learn more
						</Link>
					</div>
				</div>

				<div className="sm:flex sm:flex-row grid grid-cols-2 gap-8 justify-between items-center sm:px-32 px-4 py-16 bg-lightBlue">
					{keyOfferings.map((ko, index) => (
						<div
							key={index}
							className="flex flex-col justify-center items-center sm:space-x-4 space-y-2"
						>
							<ko.icon size={40} className="text-white" />
							<p className="text-base font-normal text-center text-white">
								{ko.label}
							</p>
						</div>
					))}
				</div>
				<div className="sm:px-28 px-4 flex flex-col justify-center items-center space-y-12 py-10">
					<Header title="Our Vision" />
					<p className="font-light text-base sm:w-2/3 w-[95%] text-center">
						Powering South African progress by being the most trusted source for
						quality industrial and agricultural commodities, contributing
						directly to the country's economic vitality.
					</p>
					<div className="grid sm:grid-cols-3 grid-cols-1 gap-10">
						{commodities.map((com, index) => (
							<div
								className="w-[25rem] h-[25rem] relative rounded-xl group cursor-pointer"
								key={index}
							>
								<div className="absolute w-[25rem] h-[25rem] rounded-xl overflow-hidden">
									<img
										src={com.image || "/placeholder.svg"}
										alt={com.label}
										className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/50 z-10"></div>
								</div>
								<div className="relative z-10 flex flex-col justify-center h-full p-6 space-y-10">
									<p className="text-white text-xl font-semibold">
										{com.label}
									</p>
									<p className="text-white text-base">{com.description}</p>
									<div className="flex">
										<Link
											to={com.path}
											className="flex bg-white rounded-full p-2 w-2/6 justify-center"
										>
											Learn more
										</Link>
										<div className="bg-white p-2 rounded-full w-4 h-4" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="sm:max-w-7xl mx-auto py-14 space-y-10">
					<Header title="Our Trusted Partners" />
					<LogoCarousel logos={affiliates} />
				</div>
				<div className="w-full h-96 relative">
					<img
						src="/assets/extraction-footer.jpg"
						alt="Industry"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/50 z-10"></div>
				</div>
			</div>
		</MainLayout>
	);
};

export default Home;
