import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "~/lib/utils";
import { LogoCarouselProps } from "~/lib/types";

export default function LogoCarousel({
	className,
	logos,
	autoplaySpeed = 2000,
}: LogoCarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
		dragFree: true,
		containScroll: "trimSnaps",
		align: "start",
	});

	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const [autoplayInterval, setAutoplayInterval] =
		useState<NodeJS.Timeout | null>(null);

	const startAutoplay = useCallback(() => {
		if (!emblaApi || !isAutoPlaying) return;

		if (autoplayInterval) clearInterval(autoplayInterval);

		const interval = setInterval(() => {
			if (emblaApi) emblaApi.scrollNext();
		}, autoplaySpeed);

		setAutoplayInterval(interval);
	}, [emblaApi, isAutoPlaying, autoplaySpeed, autoplayInterval]);

	useEffect(() => {
		startAutoplay();

		return () => {
			if (autoplayInterval) clearInterval(autoplayInterval);
		};
	}, [emblaApi, startAutoplay, autoplayInterval]);

	const pauseAutoplay = useCallback(() => {
		setIsAutoPlaying(false);
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
			setAutoplayInterval(null);
		}
	}, [autoplayInterval]);

	const resumeAutoplay = useCallback(() => {
		setIsAutoPlaying(true);
	}, []);

	return (
		<div
			className={cn("overflow-hidden", className)}
			onMouseEnter={pauseAutoplay}
			onMouseLeave={resumeAutoplay}
		>
			<div className="overflow-hidden" ref={emblaRef}>
				<div className="flex items-center">
					{logos.map((logo, index) => (
						<div
							key={index}
							className="flex-[0_0_auto] min-w-[80px] sm:min-w-[160px] md:min-w-[200px] mx-2 xs:mx-3 sm:mx-4 md:mx-6 flex items-center justify-center h-16 sm:h-20 md:h-24"
						>
							<div className="relative w-full h-10 xs:h-12 sm:h-14 md:h-16 flex items-center justify-center transition-all duration-300">
								<img
									src={logo.src}
									alt={logo.alt}
									width={logo.width || 180}
									height={logo.height || 80}
									className="object-contain max-h-full max-w-[80%] sm:max-w-[90%]"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
