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
import Logo from "./logo";
import NavLink from "./nav-link";
import AnimatedLink from "./animated-link";

const MainLayout = ({ children }: { children: ReactNode }) => {
	const data: NavItem[] = [
		{
			label: "About us",
			path: "/about-us",
		},
		{
			label: "Products & Services",
			path: "/",
			options: [
				{
					label: "Bulk Commodities",
					path: "/bulk-commodities",
				},
				{
					label: "Agricultural Commodities",
					path: "/agricultural-commodities",
				},
				{
					label: "Petroleum Commodities",
					path: "/petroleum-commodities",
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
						<Logo />
					</Link>
					<div className="hidden md:block">
						<div className="flex flex-row gap-5 items-center justify-end">
							<NavigationMenu>
								<NavigationMenuList>
									{data.map((item, index) => (
										<NavigationMenuItem key={index}>
											{!item.options && (
												<NavigationMenuLink
													className={navigationMenuTriggerStyle()}
													href={item.path}
												>
													{item.label}
												</NavigationMenuLink>
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

							<AnimatedLink path="/" title="Contact us" />
						</div>
					</div>
				</nav>
			</header>
			{children}
			<footer className="flex flex-col gap-12 sm:px-24 px-4 py-16">
				<div className="flex sm:flex-row flex-col w-full justify-between sm:items-center">
					<Link to="/">
						<Logo />
					</Link>
					<div className="flex flex-row sm:space-x-10 space-x-5">
						<NavLink path="/" title="About us" />
						<NavLink path="/" title="Sustainability" />
						<NavLink path="/" title="Contact us" />
					</div>
				</div>
				<Separator />
				<div className="flex flex-col space-y-2">
					<p className="font-light text-sm">
						1 Tamchele Ave, Beverley, Sandton, Johannesburg, 2191
					</p>
					<a
						href="mailto:info@csresources.co.za"
						className="font-medium text-sm text-lightBlue cursor-pointer"
					>
						info@csresources.co.za
					</a>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;
