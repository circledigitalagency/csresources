import { Link } from "@remix-run/react";
import { ArrowDown01Icon, Menu01Icon } from "hugeicons-react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "~/components/ui/sheet";
import Logo from "./logo";
import { menu } from "~/lib/data";
import { useState } from "react";
import AnimatedMenuOptions from "./animated-menu-items";
import AnimatedLink from "./animated-link";

const BurgerMenu = () => {
	const [openOptions, setOpenOptions] = useState<boolean>();
	const [openDrawer, setOpenDrawer] = useState<boolean>();

	const closeDrawer = () => {
		setOpenDrawer(false);
		setOpenOptions(false);
	};

	return (
		<Sheet onOpenChange={closeDrawer}>
			<SheetTrigger className="sm:hidden block">
				<Menu01Icon size={30} />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>
						<Link to="/">
							<Logo />
						</Link>
					</SheetTitle>
					<SheetDescription className="flex flex-col space-y-2 p-2 w-full items-start h-[12rem] justify-between">
						<div className="flex flex-col space-y-2 p-2 w-full items-start">
							{menu.map((item, index) => (
								<div key={index}>
									{!item.options && <Link to={item.path}>{item.label}</Link>}

									{item.options && (
										<>
											<div
												className="flex gap-2 items-center cursor-pointer"
												onClick={() => setOpenOptions(!openOptions)}
											>
												<p>{item.label}</p>
												<ArrowDown01Icon />
											</div>

											{openOptions && (
												<div className="flex flex-col space-y-4 items-start px-2 mt-4 mb-4">
													{item.options?.map((option, index) => (
														<div key={index}>
															<AnimatedMenuOptions
																closeDrawer={closeDrawer}
																index={index}
																option={option}
															/>
														</div>
													))}
												</div>
											)}
										</>
									)}
								</div>
							))}
						</div>
						<Link
							to="/contact-us"
							className="sm:hidden p-2 border border-1 border-black rounded-full text-sm w-32 items-center justify-center flex"
						>
							Contact us
						</Link>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default BurgerMenu;
