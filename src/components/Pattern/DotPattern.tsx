export function DotPattern() {
	return (
		<div className="absolute inset-0 opacity-20 pointer-events-none">
			<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
				<title>Dot pattern background</title>

				<defs>
					<pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
						<circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary-foreground" />
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#dots-pattern)" />
			</svg>
		</div>
	);
}
