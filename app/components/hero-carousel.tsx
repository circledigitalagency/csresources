import useEmblaCarousel from "embla-carousel-react";
import { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import "~/css/embla.css";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "~/lib/utils";
import { useCallback, useEffect, useState } from "react";

const HeroCarousel = () => {
	const options: EmblaOptionsType = { loop: true };
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		Autoplay({ playOnInit: true, delay: 2000 }),
	]);

	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const updateEmblaDots = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi?.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (emblaApi) {
			emblaApi.on("scroll", updateEmblaDots);
		}
	}, [emblaApi, updateEmblaDots]);

	const slides = [
		{
			src: "/assets/coal-hero.jpg",
			alt: "coal",
		},
		{
			src: "/assets/industry.jpg",
			alt: "industry",
		},
		{
			src: "/assets/agri-hero.jpg",
			alt: "agri",
		},
		{
			src: "/assets/chrome-ore.jpg",
			alt: "chrome-ore",
		},
		{
			src: "/assets/maze.jpg",
			alt: "maze",
		},
	];

	return (
		<section className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((slide, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__slide__number">
								<img
									className="w-full object-fill"
									src={slide.src}
									alt={slide.alt}
								/>
								<div className="absolute inset-0 bg-black/50 z-10"></div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="embla__controls">
				{slides.map((slide, index) => (
					<div
						className={cn(
							"w-12 h-px rounded-full",
							index === selectedIndex ? "bg-gold" : "bg-slate-300"
						)}
					/>
				))}
			</div>
		</section>
	);
};

export default HeroCarousel;
