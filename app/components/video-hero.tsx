import React, { useEffect, useRef, ReactNode } from "react";

interface HeroVideoProps {
	videoSrc: string;
	fallbackImageSrc: string;
	overlayText?: ReactNode;
	height?: string;
	objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
	muted?: boolean;
	loop?: boolean;
	autoplay?: boolean;
	controls?: boolean;
	overlay?: boolean;
	overlayColor?: string;
}

export default function HeroVideo({
	videoSrc,
	fallbackImageSrc,
	overlayText,
	height = "100vh",
	objectFit = "cover",
	muted = true,
	loop = true,
	autoplay = true,
	controls = false,
	overlay = true,
	overlayColor = "rgba(0, 0, 0, 0.4)",
}: HeroVideoProps): JSX.Element {
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.muted = muted;

			const playPromise = videoRef.current.play();

			if (playPromise !== undefined) {
				playPromise.catch((error: Error) => {
					console.log("Auto-play was prevented. Silent error:", error);
				});
			}
		}
	}, [muted]);

	return (
		<div className="hero-video-container">
			<video
				ref={videoRef}
				className="hero-video"
				autoPlay={autoplay}
				muted={muted}
				loop={loop}
				playsInline
				controls={controls}
				poster={fallbackImageSrc}
			>
				<source src={videoSrc} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{overlay && <div className="video-overlay"></div>}

			{overlayText && <div className="overlay-text">{overlayText}</div>}

			<style>{`
        .hero-video-container {
          position: relative;
          width: 100%;
          height: ${height};
          overflow: hidden;
        }
        
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: ${objectFit};
        }
        
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${overlayColor};
        }
        
        .overlay-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          z-index: 2;
          text-align: center;
          width: 80%;
        }
      `}</style>
		</div>
	);
}
