import { ReactNode } from "react";
import { cn } from "~/lib/utils";

const BackgroundImageContainer = ({
	children,
	bgImage,
}: {
	children: ReactNode;
	bgImage: string;
}) => {
	return (
		<div
			className={cn("bg-no-repeat bg-cover bg-center w-full relative", bgImage)}
		>
			<div className="absolute inset-0 bg-white bg-opacity-90"></div>

			<div className="relative h-full content-center">{children}</div>
		</div>
	);
};

export default BackgroundImageContainer;
