import type { MetaFunction } from "@remix-run/node";
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

export default function Index() {
	return <Home />;
}
