import type { Hotel } from "@/Pages/admin/hotels/api/types";
import {
	HotelCard,
	HotelCardContent,
	HotelCardImage,
	HotelCardLocation,
	HotelCardRating,
	HotelCardTitle,
	HotelDiscountedPrice,
	HotelPrice,
} from ".";

interface RecentlyVisitedCardProps {
	hotel: Hotel;
}

export const RecentlyVisitedCard: React.FC<RecentlyVisitedCardProps> = ({ hotel }) => (
	<HotelCard key={hotel.id}>
		<HotelCardImage src={hotel.imageUrl} alt={hotel.name} />

		<HotelCardContent>
			<HotelCardTitle>{hotel.name}</HotelCardTitle>
			<HotelCardLocation>{hotel.location}</HotelCardLocation>
			<HotelCardRating rating={hotel.starRating} />

			<HotelPrice>
				<HotelDiscountedPrice>{hotel.price}</HotelDiscountedPrice>
				<span className="text-xs text-muted-foreground">/ night</span>
			</HotelPrice>
		</HotelCardContent>
	</HotelCard>
);
