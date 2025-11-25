interface TitleProps {
	section: string;
	description?: string;
}

export function Title({ section, description }: TitleProps) {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="scroll-m-20 text-2xl sm:text-4xl font-extrabold tracking-tight text-balance">
				{section} Management
			</h1>

			{description && <p className="text-sm sm:text-md text-muted-foreground font-medium">{description}</p>}
		</div>
	);
}

export default Title;
