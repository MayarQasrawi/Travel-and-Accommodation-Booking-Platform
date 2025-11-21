import type React from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";

interface BaseInputProps {
	label: string;
	value?: string;
	onChange?: (value: string) => void;
	type?: string;
	placeholder?: string;
	addon?: React.ReactNode;
}

export const BaseInput: React.FC<BaseInputProps> = ({ label, value, onChange, type = "text", placeholder, addon }) => {
	return (
		<div className="space-y-2">
			<InputGroup>
				{addon && <InputGroupAddon>{addon}</InputGroupAddon>}
				<InputGroupInput
					value={value}
					onChange={(e) => onChange?.(e.target.value)}
					type={type}
					placeholder={placeholder}
					aria-label={label}
				/>
			</InputGroup>
		</div>
	);
};

export default BaseInput;
