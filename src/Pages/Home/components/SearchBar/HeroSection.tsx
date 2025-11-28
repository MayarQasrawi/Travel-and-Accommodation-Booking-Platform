import { useState } from "react";
import MainSearchBar from "./MainSearchBar";
import QuranVerseHero from "./QuranVerseHero";
import ScrollIndicator from "./ScrollIndicator ";

interface SearchForm {
	query: string;
	checkIn: Date;
	checkOut: Date;
	adults: number;
	children: number;
	rooms: number;
}

export default function HeroSection() {
	const [isSearching, setIsSearching] = useState(false);

	const handleSearch = (form: SearchForm) => {
		console.log("Search submitted:", form);
		setIsSearching(true);
	};

	return (
		<section className="min-h-screen bg-gray-600 flex items-center justify-center">
			{/* Background */}
			<div className="absolute inset-0 bg-black/60">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-30"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
					}}
				/>
			</div>

			<div className="relative z-10 w-full max-w-6xl mx-auto px-4">
				<QuranVerseHero />

				<MainSearchBar onSubmit={handleSearch} />

				<ScrollIndicator />
			</div>
		</section>
	);
}
