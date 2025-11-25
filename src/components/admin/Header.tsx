import { Search } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BaseInput from "../inputs/BaseInput";
import { SidebarTrigger } from "../ui/sidebar";

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
		<header className=" bg-background sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4">
			<SidebarTrigger />

			<div className="flex gap-2">
				<BaseInput
					type="search"
					placeholder={searchPlaceholder}
					value={query}
					onChange={setQuery}
					className="md:w-xl"
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
