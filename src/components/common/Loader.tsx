interface LoaderProps {
	className?: string;
	size?: number;
}

export function Loader({ className = "", size = 24 }: LoaderProps) {
	return (
		<div className="flex items-center justify-center py-12 ">
			<svg
				version="1.1"
				id="L9"
				xmlns="http://www.w3.org/2000/svg"
				x="0px"
				y="0px"
				viewBox="10 40 45 50"
				enable-background="new 0 0 0 0"
				className={className}
				height={size}
				width={size}
			>
				<title>Loading...</title>

				<rect x="20" y="50" width="4" height="10" fill="currentColor">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="30" y="50" width="4" height="10" fill="currentColor">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.2s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
				<rect x="40" y="50" width="4" height="10" fill="currentColor">
					<animateTransform
						attributeType="xml"
						attributeName="transform"
						type="translate"
						values="0 0; 0 20; 0 0"
						begin="0.4s"
						dur="0.6s"
						repeatCount="indefinite"
					/>
				</rect>
			</svg>
		</div>
	);
}
