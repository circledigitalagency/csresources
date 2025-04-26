import { HugeiconsProps } from "hugeicons-react";

export interface NavItem {
	label: string;
	path: string;
	options?: NavItem[];
}

export interface Offerings {
	label: string;
	icon: React.FC<Omit<HugeiconsProps, "ref">>;
}

export interface Commodities {
	label: string;
	description: string;
	path: string;
	image: string;
}

export interface LogoCarouselProps {
	className?: string;
	logos: {
		src: string;
		alt: string;
		width?: number;
		height?: number;
	}[];
	autoplaySpeed?: number;
}
