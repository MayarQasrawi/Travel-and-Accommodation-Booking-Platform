import { MapPin } from "lucide-react";
import { GridPattern } from "@/components/Pattern/GridPattern";
import { type TrendingDestination, useTrendingDestinations } from "@/Pages/Home/hooks/useTrendingDestinations";
import { TrendingDestinationCard } from "../hotel-card/cards/TrendingDestinationCard";
import { HotelSection } from "./HotelSection";

export const TrendingDestinationsSection: React.FC = () => {
	const { data: destinations, isLoading } = useTrendingDestinations();

	return (
		<HotelSection<TrendingDestination>
			badgeIcon={<MapPin className="w-4 h-4" />}
			badgeText="Trending Now"
			title="Popular"
			highlight="Destinations"
			subtitle="Explore the most sought-after travel destinations around the world"
			hotels={destinations || []}
			CardComponent={TrendingDestinationCard}
			backgroundPattern={<GridPattern id="trending-destinations-pattern" />}
			isLoading={isLoading}
		/>
	);
};
