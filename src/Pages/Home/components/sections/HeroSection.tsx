import MainSearchBar from "../SearchBar/MainSearchBar";
import QuranVerseHero from "../SearchBar/QuranVerseHero";
import ScrollIndicator from "../SearchBar/ScrollIndicator ";

export default function HeroSection() {
	return (
		<section
			className="min-h-screen flex items-center justify-center bg-dark-green"
			style={{
				backgroundImage: `
          linear-gradient(rgba(6, 44, 32, 0.6), rgba(6, 44, 32, 0.6)),
          url('https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')
        `,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="w-full max-w-6xl mx-auto px-4">
				<QuranVerseHero />
				<MainSearchBar />
				<ScrollIndicator />
			</div>
		</section>
	);
}
