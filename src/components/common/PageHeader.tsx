interface PageHeaderProps {
	title: string;
	subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
	return (
		<header className="mb-8">
			<h1 className="text-4xl font-bold mb-2">{title}</h1>
			{subtitle && <p className="text-muted-foreground">{subtitle}</p>}
		</header>
	);
}
