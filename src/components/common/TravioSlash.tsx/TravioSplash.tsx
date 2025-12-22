import { useEffect, useState } from "react";
import "./Traviosplash.css";

export const TravioSplash = () => {
	const [isVisible, setIsVisible] = useState(true);
	const [isAnimatingOut, setIsAnimatingOut] = useState(false);

	useEffect(() => {
		// Check if splash has been shown before
		const hasShownSplash = sessionStorage.getItem("travioSplashShown");

		if (hasShownSplash) {
			setIsVisible(false);
			return;
		}

		// Simulate loading time (2s)
		const timer = setTimeout(() => {
			setIsAnimatingOut(true);
			setTimeout(() => {
				setIsVisible(false);
				sessionStorage.setItem("travioSplashShown", "true");
			}, 700);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	if (!isVisible) return null;

	return (
		<div className={`travio-splash-container ${isAnimatingOut ? "fade-out" : ""}`}>
			<div className="travio-splash-content">
				{/* Animated compass background rings */}
				<div className="compass-ring compass-ring-1"></div>
				<div className="compass-ring compass-ring-2"></div>

				{/* Main logo */}
				<div className="logo-container">
					{/* Paper airplane SVG */}
					<div className="logo-icon-wrapper">
						<svg className="logo-icon" viewBox="0 0 100 100" fill="none">
							<title id="logoTitle">Travio Paper Airplane Logo</title>
							<path
								d="M10 50 L90 10 L60 50 L90 90 L10 50 Z M60 50 L50 90"
								stroke="currentColor"
								strokeWidth="3"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="airplane-path"
							/>
							<circle
								cx="50"
								cy="50"
								r="45"
								stroke="currentColor"
								strokeWidth="2"
								opacity="0.3"
								className="logo-circle"
							/>
						</svg>
					</div>

					{/* Brand name */}
					<h1 className="brand-name">Travio</h1>

					{/* Tagline */}
					<p className="tagline">Your Journey Begins</p>
				</div>

				{/* Loading indicator */}
				<div className="loading-bar">
					<div className="loading-progress"></div>
				</div>
			</div>
		</div>
	);
};
