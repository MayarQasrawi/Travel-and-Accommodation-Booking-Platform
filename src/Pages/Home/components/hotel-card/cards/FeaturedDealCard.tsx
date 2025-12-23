import { discountPercentage } from "@/utils/discountPercentage";
import type { FeaturedDeal } from "../../../hooks/useFeaturedDeals";
import { Card } from "..";

interface FeaturedDealCardProps {
	hotel: FeaturedDeal;
}

export const FeaturedDealCard: React.FC<FeaturedDealCardProps> = ({ hotel }) => {
	const percentage = discountPercentage({
		originalPrice: hotel.originalRoomPrice,
		finalPrice: hotel.finalPrice,
	});

	return (
		<Card key={hotel.hotelId}>
			<div className="relative">
				<Card.Image src={hotel.roomPhotoUrl} alt={hotel.hotelName} />
				{percentage > 0 && (
					<Card.Badge variant="destructive" className="bg-gold">
						{percentage}% OFF
					</Card.Badge>
				)}
			</div>

			<Card.Content>
				<Card.Title>{hotel.hotelName}</Card.Title>
				<Card.Location>{hotel.cityName}</Card.Location>
				<Card.Rating rating={hotel.hotelStarRating} />

				<Card.Price>
					<Card.OriginalPrice>{hotel.originalRoomPrice}</Card.OriginalPrice>
					<Card.DiscountedPrice>{hotel.finalPrice}</Card.DiscountedPrice>
				</Card.Price>
			</Card.Content>
		</Card>
	);
};
