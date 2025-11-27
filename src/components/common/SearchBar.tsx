import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BaseInput from "../inputs/BaseInput";

interface SearchBarProps {
	placeholder?: string;
	onSearch: (query: string) => void;
}

export default function SearchBar({ placeholder = "Search...", onSearch }: SearchBarProps) {
	const [query, setQuery] = useState("");

	const handleSubmit = () => {
		if (query.trim()) onSearch(query);
	};

	return (
		<div className="flex gap-2">
			<BaseInput
				type="search"
				placeholder={placeholder}
				value={query}
				onChange={setQuery}
				className="md:w-xl"
				onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
			/>

			<Button onClick={handleSubmit} className="flex items-center gap-2">
				<Search className="h-4 w-4" />
				Search
			</Button>
		</div>
	);
}
