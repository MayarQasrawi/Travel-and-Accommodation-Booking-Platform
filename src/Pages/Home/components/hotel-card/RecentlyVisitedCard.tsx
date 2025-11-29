import { HistoryIcon } from "lucide-react";
import type { RecentlyVisitedHotel } from "@/Pages/Home/hooks/useRecentlyVisitedHotels";
import { formatDate } from "@/utils/formatDate";
import {
	HotelBadge,
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
	hotel: RecentlyVisitedHotel;
}

export const RecentlyVisitedCard: React.FC<RecentlyVisitedCardProps> = ({ hotel }) => {
	const formattedDate = formatDate(hotel.visitDate);

	return (
		<HotelCard key={hotel.hotelId}>
			<div className="relative">
				<HotelCardImage src={hotel.thumbnailUrl} alt={hotel.hotelName} />
				<HotelBadge variant="default">
					<span className="font-light flex items-center gap-1">
						<HistoryIcon className="w-3 h-3" />
						{formattedDate}
					</span>
				</HotelBadge>
			</div>

			<HotelCardContent>
				<HotelCardTitle>{hotel.hotelName}</HotelCardTitle>
				<HotelCardLocation>{hotel.cityName}</HotelCardLocation>

				<HotelCardRating rating={hotel.starRating} />

				<HotelPrice>
					<HotelDiscountedPrice>
						{hotel.priceLowerBound}- {hotel.priceUpperBound}
						<span className="text-xs text-muted-foreground">/ night</span>
					</HotelDiscountedPrice>
				</HotelPrice>
			</HotelCardContent>
		</HotelCard>
	);
};
