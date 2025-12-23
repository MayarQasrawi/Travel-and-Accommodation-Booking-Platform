import { cn } from "@/lib/utils";

interface PageHeaderProps {
	title: string;
	subtitle?: string;
	className?: string;
}

export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
	return (
		<header className={cn("mb-8", className)}>
			<h1 className="text-4xl font-bold mb-2">{title}</h1>
			{subtitle && <p className="text-muted-foreground">{subtitle}</p>}
		</header>
	);
}
