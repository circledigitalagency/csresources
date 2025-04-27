import { Link } from "@remix-run/react";

const NavLink = ({ path, title }: { path: string; title: string }) => {
	return (
		<Link
			to={path}
			className="font-light hover:font-medium text-sm hover:text-lightBlue transition delay-150 duration-300 ease-in-out"
		>
			<p>{title}</p>
		</Link>
	);
};

export default NavLink;
