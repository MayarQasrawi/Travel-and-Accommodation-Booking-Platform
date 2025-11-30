import type React from "react";
import { Slider } from "@/components/ui/slider";

interface RangeSliderFilterProps {
	value: [number, number];
	min: number;
	max: number;
	step?: number;
	currency?: string;
	onChange: (val: [number, number]) => void;
}

export const RangeSliderFilter: React.FC<RangeSliderFilterProps> = ({
	value,
	min,
	max,
	step = 1,
	currency = "",
	onChange,
}) => {
	return (
		<div className="space-y-2">
			<Slider
				value={value}
				min={min}
				max={max}
				step={step}
				onValueChange={(val) => onChange(val as [number, number])}
			/>

			<div className="flex justify-between text-sm text-muted-foreground font-medium">
				{value.map((v) => (
					<span key={v}>
						{currency}
						{v}
					</span>
				))}
			</div>
		</div>
	);
};
