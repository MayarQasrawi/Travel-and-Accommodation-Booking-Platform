import BaseInput from "../inputs/BaseInput";

interface SearchInputProps {
	value: string;
	placeholder?: string;
	onChange: (val: string) => void;
	onEnter?: () => void;
	className?: string;
}

export default function SearchInput({
	value,
	placeholder = "Search...",
	onChange,
	onEnter,
	className,
	...props
}: SearchInputProps) {
	return (
		<BaseInput
			{...props}
			type="search"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={className}
			onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
				if (e.key === "Enter" && onEnter) onEnter();
			}}
		/>
	);
}
