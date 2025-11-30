import { FeaturedDealsSection } from "./components/sections/FeaturedDealsSection";
import Footer from "./components/sections/Footer";
import HeroSection from "./components/sections/HeroSection";
import { RecentlyVisitedSection } from "./components/sections/RecentlyVisitedSection";

import { TrendingDestinationsSection } from "./components/sections/TrendingDestinationsSection";

function Home() {
	return (
		<>
			<HeroSection />
			<FeaturedDealsSection />
			<RecentlyVisitedSection />
			<TrendingDestinationsSection />
			<Footer />
		</>
	);
}

export default Home;
