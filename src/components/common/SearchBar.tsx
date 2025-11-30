import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SearchInput from "./SearchInput";

interface SearchBarProps {
	placeholder?: string;
	onSearch: (query: string) => void;
	className?: string;
}

export default function SearchBar({ placeholder = "Search...", onSearch, className }: SearchBarProps) {
	const [query, setQuery] = useState("");

	const handleSubmit = () => {
		if (query.trim()) onSearch(query);
	};

	return (
		<div className={`flex gap-2 ${className}`}>
			<SearchInput value={query} placeholder={placeholder} onChange={setQuery} onEnter={handleSubmit} />

			<Button onClick={handleSubmit} className="flex items-center gap-2">
				<Search className="h-4 w-4" />
				Search
			</Button>
		</div>
	);
}
