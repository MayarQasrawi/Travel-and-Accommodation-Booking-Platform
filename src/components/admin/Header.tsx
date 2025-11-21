import { Search } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../common/Logo";
import BaseInput from "../inputs/BaseInput";

interface HeaderProps {
	searchPlaceholder?: string;
	onSearch?: (query: string) => void;
}

export default function Header({ searchPlaceholder = "Search...", onSearch }: HeaderProps) {
	const [query, setQuery] = useState("");

	const handleSearch = () => {
		if (onSearch) onSearch(query);
	};

	return (
		<header className="border-b bg-background sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4">
			<Logo className="hidden sm:flex" />

			<div className="flex sm:ml-4 gap-2">
				<BaseInput
					type="search"
					label="search"
					placeholder={searchPlaceholder}
					value={query}
					onChange={setQuery}
					className="md:w-lg"
					onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && handleSearch()}
				/>
				<Button onClick={handleSearch} className="flex items-center gap-2">
					<Search className="h-4 w-4" />
					Search
				</Button>
			</div>
		</header>
	);
}
