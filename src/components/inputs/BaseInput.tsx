import type React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

interface BaseInputProps {
	label?: string;
	name?: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	placeholder?: string;
	addon?: React.ReactNode;
	className?: string;
	[key: string]: any;
}

export const BaseInput: React.FC<BaseInputProps> = ({
	label,
	name,
	value,
	onChange,
	type = "text",
	placeholder,
	addon,
	className,
	...props
}) => {
	const displayLabel = label || name;

	return (
		<div className="space-y-2">
			{displayLabel && (
				<label htmlFor={name} className="block text-sm font-medium">
					{displayLabel}
				</label>
			)}
			<InputGroup {...props}>
				{addon && <InputGroupAddon>{addon}</InputGroupAddon>}
				<InputGroupInput
					id={name}
					name={name}
					value={value}
					onChange={(e) => onChange?.(e.target.value)}
					type={type}
					placeholder={placeholder}
					aria-label={displayLabel}
					className={className}
				/>
			</InputGroup>
		</div>
	);
};

export default BaseInput;
