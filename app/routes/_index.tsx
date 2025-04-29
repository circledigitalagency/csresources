import { json, type LoaderFunction, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { HomeLoaderData } from "~/lib/types";
import Home from "~/pages/Home";

export const meta: MetaFunction = () => {
	return [
		{ title: "Cornerstone Resources" },
		{
			name: "description",
			content:
				"Cornerstone Resources 411 is a leading 100% Black-owned South African company specialising in the wholesale supply of crucial bulk commodities, agricultural goods, and petroleum products.",
		},
	];
};

export const loader: LoaderFunction = async () => {
	return json<HomeLoaderData>({
		videoSrc: "/videos/coal.mp4",
		fallbackImageSrc: "",
	});
};

export default function Index() {
	const data = useLoaderData<HomeLoaderData>();
	return <Home videoSrc={data.videoSrc} fallbackImageSrc="" />;
}
