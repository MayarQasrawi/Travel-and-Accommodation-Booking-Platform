import { Sparkles } from "lucide-react";
import { GridPattern } from "@/components/Pattern/GridPattern";
import { useFeaturedDeals } from "../../hooks/useFeaturedDeals";
import { FeaturedDealCard } from "../hotel-card/cards/FeaturedDealCard";
import { HotelSection } from "./HotelSection";

export function FeaturedDealsSection() {
	const { data, isLoading } = useFeaturedDeals();
	return (
		<HotelSection
			badgeIcon={<Sparkles className="w-4 h-4" />}
			badgeText="Limited Time"
			title="Featured"
			highlight="Deals"
			subtitle="Discover handpicked hotels with exclusive discounts"
			hotels={data ?? []}
			CardComponent={FeaturedDealCard}
			backgroundPattern={<GridPattern id="featured-deals-pattern" />}
			isLoading={isLoading}
		/>
	);
}
