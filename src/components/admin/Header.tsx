import SearchBar from "../common/SearchBar";
import { SidebarTrigger } from "../ui/sidebar";

interface HeaderProps {
	searchPlaceholder?: string;
	onSearch?: (query: string) => void;
}

export default function Header({ searchPlaceholder = "Search...", onSearch }: HeaderProps) {
	return (
		<header className="bg-background sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4">
			<SidebarTrigger />

			{onSearch && <SearchBar placeholder={searchPlaceholder} onSearch={onSearch} />}
		</header>
	);
}
