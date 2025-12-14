import type { PropsWithChildren } from "react";

interface FilterSectionProps {
	title: string;
}

const FilterSection = ({ title, children }: PropsWithChildren<FilterSectionProps>) => {
	return (
		<div className="space-y-2">
			<h2 className="text-sm font-bold text-muted-foreground">{title}</h2>
			{children}
		</div>
	);
};

export default FilterSection;
