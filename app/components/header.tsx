import { cn } from "~/lib/utils";

const Header = ({
	title,
	fontSize = "text-2xl",
}: {
	title: string;
	fontSize?: string;
}) => {
	return (
		<div className="flex flex-col items-center">
			<h2 className={cn("font-medium text-center mb-4", fontSize)}>{title}</h2>
			<div className="w-20 h-1 bg-mainBlue rounded-full" />
		</div>
	);
};

export default Header;
