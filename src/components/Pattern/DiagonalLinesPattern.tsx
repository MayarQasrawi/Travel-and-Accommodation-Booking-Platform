export function DiagonalLinesPattern({
	id = "diagonal-lines",
	stroke = "currentColor",
	strokeWidth = 1,
	opacityClass = "text-primary/30",
	angle = 45,
}) {
	return (
		<svg className="w-full h-full">
			<title>Diagonal Lines Pattern background</title>

			<defs>
				<pattern id={id} width="60" height="60" patternUnits="userSpaceOnUse" patternTransform={`rotate(${angle})`}>
					<line x1="0" y1="0" x2="0" y2="60" stroke={stroke} strokeWidth={strokeWidth} className={opacityClass} />
				</pattern>
			</defs>

			<rect width="100%" height="100%" fill={`url(#${id})`} />
		</svg>
	);
}
