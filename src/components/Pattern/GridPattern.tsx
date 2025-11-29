export function GridPattern({
	id = "grid-pattern",
	stroke = "currentColor",
	strokeWidth = 0.5,
	opacityClass = "text-primary/20",
}) {
	return (
		<svg className="w-full h-full">
			<title>Grid pattern background</title>

			<defs>
				<pattern id={id} width="40" height="40" patternUnits="userSpaceOnUse">
					<path d="M 40 0 L 0 0 0 40" fill="none" stroke={stroke} strokeWidth={strokeWidth} className={opacityClass} />
				</pattern>
			</defs>

			<rect width="100%" height="100%" fill={`url(#${id})`} />
		</svg>
	);
}
