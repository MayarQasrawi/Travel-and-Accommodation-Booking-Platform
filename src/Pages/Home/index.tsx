import { FeaturedDealsSection } from "./components/sections/FeaturedDealsSection";
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
		</>
	);
}

export default Home;
