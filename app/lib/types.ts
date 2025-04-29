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

export interface Marker {
	position: google.maps.LatLngLiteral;
	title?: string;
}

export interface GoogleMapProps {
	apiKey: string;
	center?: google.maps.LatLngLiteral;
	zoom?: number;
	markers?: Marker[];
}

export interface LoaderData {
	apiKey: string;
}

export interface WhatsAppButtonProps {
	phoneNumber: string;
	message?: string;
}

export type HomeLoaderData = {
	videoSrc: string;
	fallbackImageSrc: string;
};
