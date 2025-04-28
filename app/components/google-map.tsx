import { useEffect, useRef } from "react";
import * as googlemaps from "@googlemaps/js-api-loader";
const Loader = googlemaps.Loader;
import { GoogleMapProps } from "~/lib/types";

export default function GoogleMap({
	apiKey,
	center = { lat: -25.9963, lng: 28.0308 },
	zoom = 10,
	markers = [
		{
			position: { lat: -25.9963, lng: 28.0308 },
			title: "1 Tamchele Ave, Beverley, Sandton, Johannesburg, 2191",
		},
	],
}: GoogleMapProps) {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mapDiv = mapRef.current;
		if (!mapDiv) return;

		const loader = new Loader({
			apiKey,
			version: "weekly",
		});

		loader.load().then(() => {
			const map = new google.maps.Map(mapDiv, {
				center,
				zoom,
			});

			markers.forEach((markerData) => {
				new google.maps.Marker({
					position: markerData.position,
					map,
					title: markerData.title,
				});
			});
		});
	}, [apiKey, center, zoom, markers]);

	return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
