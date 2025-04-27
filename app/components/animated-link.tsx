import { Link } from "@remix-run/react";

const AnimatedLink = ({ path, title }: { path: string; title: string }) => {
	return (
		<div className="flex">
			<Link
				to={path}
				className="
sm:flex p-2 border border-1 border-mainBlue rounded-full text-sm w-32 items-center justify-center hidden
relative overflow-hidden group
"
			>
				<span
					className="
absolute inset-0 w-0 bg-mainBlue transition-all duration-300 ease-out group-hover:w-full

"
				></span>
				<span className="relative z-10 transition-colors duration-300 group-hover:text-white">
					{title}
				</span>
			</Link>
		</div>
	);
};

export default AnimatedLink;
