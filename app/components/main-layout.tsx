import { motion } from "framer-motion";
import { ReactNode } from "react";
import { NavItem } from "~/lib/types";
import { Link } from "@remix-run/react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import AnimatedMenuOptions from "./animated-menu-items";
import { Separator } from "~/components/ui/separator";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const data: NavItem[] = [
		{
			label: "About us",
			path: "/",
		},
		{
			label: "Products & Services",
			path: "/",
			options: [
				{
					label: "Bulk Commodities",
					path: "/",
				},
				{
					label: "Agricultural Commodities",
					path: "/",
				},
				{
					label: "Petroleum Commodities",
					path: "/",
				},
			],
		},
		{
			label: "Sustainability",
			path: "/",
		},
	];

	return (
		<div className="flex flex-col overflow-y-auto">
			<header>
				<nav className="sm:px-24 py-6 px-4 flex justify-between items-center">
					<Link to="/">
						<p>Cornerstone Resources</p>
					</Link>
					<div className="hidden md:block">
						<div className="flex flex-row gap-5 items-center justify-end">
							<NavigationMenu>
								<NavigationMenuList>
									{data.map((item, index) => (
										<NavigationMenuItem key={index}>
											{!item.options && (
												<Link to={item.path}>
													<NavigationMenuLink
														className={navigationMenuTriggerStyle()}
													>
														{item.label}
													</NavigationMenuLink>
												</Link>
											)}
											{item.options && (
												<>
													<NavigationMenuTrigger>
														{item.label}
													</NavigationMenuTrigger>
													<NavigationMenuContent>
														<ul
															className="flex flex-col gap-2 w-[250px] p-4"
															key={index}
														>
															{item.options.map((option, index) => (
																<div key={index}>
																	<AnimatedMenuOptions
																		closeDrawer={() => {}}
																		index={index}
																		option={option}
																	/>
																</div>
															))}
														</ul>
													</NavigationMenuContent>
												</>
											)}
										</NavigationMenuItem>
									))}
								</NavigationMenuList>
							</NavigationMenu>

							<Link
								to="/"
								className="flex p-2 border border-1 border-black rounded-full text-sm w-32 items-center justify-center"
							>
								Contact us
							</Link>
						</div>
					</div>
				</nav>
			</header>
			{children}
			<footer className="flex flex-col gap-12 sm:px-24 px-4 py-16">
				<div className="flex flex-row w-full justify-between items-center ">
					<Link to="/">
						<p>Cornerstone Resources</p>
					</Link>
					<div className="flex flex-row sm:space-x-10 space-x-5">
						<Link to="/" className="font-light text-sm">
							<p>About us</p>
						</Link>
						<Link to="/" className="font-light text-sm">
							<p>Sustainability</p>
						</Link>
						<Link to="/" className="font-light text-sm">
							<p>Contact us</p>
						</Link>
					</div>
				</div>
				<Separator />
				<div className="flex flex-col space-y-2">
					<p className="font-light text-sm">
						1 Tamchele Ave, Beverley, Sandton, Johannesburg, 2191
					</p>
					<p className="font-medium text-sm">info@csresources.co.za</p>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
