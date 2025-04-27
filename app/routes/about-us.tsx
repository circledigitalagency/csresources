import { MetaFunction } from "@remix-run/react";
import AboutUs from "~/pages/AboutUs";

export const meta: MetaFunction = () => {
	return [{ title: "About us" }];
};

const Page = () => {
	return <AboutUs />;
};

export default Page;
