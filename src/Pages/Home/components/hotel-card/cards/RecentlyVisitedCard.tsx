import { HistoryIcon } from "lucide-react";
import type { RecentlyVisitedHotel } from "@/Pages/Home/hooks/useRecentlyVisitedHotels";
import { formatDate } from "@/utils/formatDate";
import { Card } from "..";

interface RecentlyVisitedCardProps {
	hotel: RecentlyVisitedHotel;
}

export const RecentlyVisitedCard: React.FC<RecentlyVisitedCardProps> = ({ hotel }) => {
	const formattedDate = formatDate(hotel.visitDate);

	return (
		<Card key={hotel.hotelId}>
			<div className="relative">
				<Card.Image src={hotel.thumbnailUrl} alt={hotel.hotelName} />
				<Card.Badge variant="default">
					<span className="font-light flex items-center gap-1">
						<HistoryIcon className="w-3 h-3" />
						{formattedDate}
					</span>
				</Card.Badge>
			</div>

			<Card.Content>
				<Card.Title>{hotel.hotelName}</Card.Title>
				<Card.Location>{hotel.cityName}</Card.Location>

				<Card.Rating rating={hotel.starRating} />

				<Card.Price>
					<Card.DiscountedPrice>
						{hotel.priceLowerBound}- {hotel.priceUpperBound}
					</Card.DiscountedPrice>
				</Card.Price>
			</Card.Content>
		</Card>
	);
};
