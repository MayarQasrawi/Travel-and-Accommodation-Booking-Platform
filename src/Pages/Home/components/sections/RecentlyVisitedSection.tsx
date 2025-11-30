import { Clock } from "lucide-react";
import { DiagonalLinesPattern } from "@/components/Pattern/DiagonalLinesPattern";
import { type RecentlyVisitedHotel, useRecentlyVisitedHotels } from "../../hooks/useRecentlyVisitedHotels";
import { RecentlyVisitedCard } from "../hotel-card/RecentlyVisitedCard";
import { HotelSection } from "./HotelSection";

export function RecentlyVisitedSection() {
	const { data, isLoading } = useRecentlyVisitedHotels();
	return (
		<HotelSection<RecentlyVisitedHotel>
			badgeIcon={<Clock className="w-4 h-4" />}
			badgeText="Your History"
			title="Recently"
			highlight="Visited"
			subtitle="Pick up where you left off and continue exploring"
			hotels={data ?? []}
			CardComponent={RecentlyVisitedCard}
			backgroundPattern={<DiagonalLinesPattern id="recent-pattern" />}
			reverse={true}
			bgColor="bg-beige/60"
			isLoading={isLoading}
		/>
	);
}
