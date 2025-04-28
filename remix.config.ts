/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	serverDependenciesToBundle: ["@googlemaps/js-api-loader"],
	serverModuleFormat: "cjs",
	future: {
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
	serverEnv: ["GOOGLE_MAPS_API_KEY", "EMAIL_USER", "EMAIL_PASS"],
};
