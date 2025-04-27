import { Link } from "@remix-run/react";
import {
	Agreement01Icon,
	Award01Icon,
	Award02Icon,
	EarthIcon,
	EcoPowerIcon,
	HandPrayerIcon,
	Legal01Icon,
	Orbit01Icon,
	Share01Icon,
	SustainableEnergyIcon,
} from "hugeicons-react";
import AnimatedLink from "~/components/animated-link";
import Header from "~/components/header";
import MainLayout from "~/components/main-layout";
import PrinciplesCard from "~/components/principles-card";

const AboutUs = () => {
	return (
		<MainLayout>
			<div className="w-full flex flex-col justify-center items-center space-y-24">
				<div className="flex flex-col space-y-28 w-[90%]">
					<Header title="About Cornerstone Resources 411" fontSize="text-3xl" />
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="h-[20vh] w-full sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">
								Your Trusted Partner in Essential Commodities
							</p>
							<p>
								CORNERSTONE RESOURCES 411 (PTY) LTD is a 100% Black-owned South
								African company specialising in the wholesale supply and
								distribution of key bolk commodities, agricoltural products, and
								petroleum products. We stand as a reliable and dynamic partner,
								committed to powering South African industries and communities.{" "}
							</p>
						</div>
						<img
							src="/assets/maze.jpg"
							alt="maze"
							className="h-[20vh] w-full hidden sm:block"
						/>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img src="/assets/industry.jpg" alt="industry" />
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">Our Journey</p>
							<p>
								Founded in 2007, CORNERSTONE RESOURCES 411 (PTY) LTD began its
								journey as a fuel retailer. Recognising the growing needs of the
								South African market, we strategically expanded our operations
								into the supply and distribution of essential bolk commodities,
								including coal, chrome, and maize, alongside vital petroleum
								products. Over the years, this evolution has positioned us as a
								leading supplier of diverse commodities, supporting various
								critical industries across South Africa and beyond.
							</p>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-10 sm:px-40">
						<img
							src="/assets/industry.jpg"
							alt="industry"
							className="sm:hidden block"
						/>
						<div className="flex flex-col space-y-5">
							<p className="font-medium text-lg">
								Driving Transformation and Upliftment
							</p>
							<p>
								At Cornerstone Resources 411, we are deeply committed to
								fostering sustainable growth and driving meaningful economic
								transformation within South Africa. As a proud Level 1 B-BBEE
								contributor, we actively participate in the upliftment of the
								nation's economy. Our commitment extends beyond business
								success; we focus on community empowerment by investing in
								social upliftment initiatives centred on education, skills
								development, and environmental conservation, ensuring our
								operations contribute positively.
							</p>
						</div>
						<img
							src="/assets/industry.jpg"
							alt="industry"
							className="sm:block hidden"
						/>
					</div>
					<div className="flex flex-col space-y-10 items-center justify-center">
						<Header title="Our Guiding Principles" />
						<p className="sm:w-2/3 text-center">
							We operate with unwavering integrity, efficiency, and a strong
							focus on customer satisfaction. Our core values guide every aspect
							of our business:
						</p>
						<div className="grid sm:grid-cols-4 grid-cols-2 gap-5">
							<PrinciplesCard
								icon={EcoPowerIcon}
								head="Sustainability"
								description="We are committed to practices that ensure long-term viability
								and environmental health."
							/>
							<PrinciplesCard
								icon={EarthIcon}
								head="Environmental Responsibility"
								description="We prioritise environmentally sound operations and compliance."
							/>
							<PrinciplesCard
								icon={HandPrayerIcon}
								head="Client & Community Prosperity"
								description=" We are dedicated to the success
									and well-being of our clients and the communities where we
									operate."
							/>
							<PrinciplesCard
								icon={Legal01Icon}
								head="Integrity"
								description="Conducting business ethically and transparently is
									fundamental."
							/>
							<PrinciplesCard
								icon={SustainableEnergyIcon}
								head="Efficiency"
								description="We strive for optimal performance in our logistics
									and operations."
							/>
							<PrinciplesCard
								icon={Agreement01Icon}
								head="Empowerment"
								description="We believe in empowering our partners, clients,
									and communities."
							/>
							<PrinciplesCard
								icon={Award02Icon}
								head="Operational Excellence"
								description="Continuous improvement and robust
									systems ensure reliable service."
							/>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-10 items-center justify-center bg-lightBlue w-full py-16 text-white">
					<p className="w-2/3 text-center text-lg">
						Join us in becoming South Africa's preferred partner for industrial
						and agricultural commodity solutions, delivering quality products
						and driving national economic development.
					</p>

					<Link
						to="/contact-us"
						className="rounded-full text-sm w-32 bg-white text-black p-2 items-center justify-center flex"
					>
						Contact us
					</Link>
				</div>
			</div>
		</MainLayout>
	);
};

export default AboutUs;
