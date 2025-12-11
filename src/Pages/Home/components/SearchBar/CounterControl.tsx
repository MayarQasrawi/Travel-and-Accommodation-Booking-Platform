"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CounterControlProps {
	label: string;
	description: string;
	value: number;
	min?: number;
	max?: number;
	onChange: (val: number) => void;
}

export function CounterControl({ label, description, value, min = 0, onChange, max = 10 }: CounterControlProps) {
	return (
		<div className="flex items-center justify-between">
			<div>
				<p className="font-medium text-foreground">{label}</p>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
			<div className="flex items-center gap-3">
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 bg-transparent"
					onClick={() => onChange(Math.max(min, value - 1))}
					aria-label={`Decrease ${label}`}
					disabled={value <= min}
				>
					<Minus className="h-4 w-4" />
				</Button>
				<span className="w-8 text-center font-medium">{value}</span>
				<Button
					variant="outline"
					size="icon"
					className="h-8 w-8 bg-transparent"
					onClick={() => onChange(value + 1)}
					aria-label={`Increase ${label}`}
					disabled={value >= max}
				>
					<Plus className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
}
