import type { FeaturedDeal } from "../../hooks/useFeaturedDeals";
import {
	HotelBadge,
	HotelCard,
	HotelCardContent,
	HotelCardImage,
	HotelCardLocation,
	HotelCardRating,
	HotelCardTitle,
	HotelDiscountedPrice,
	HotelOriginalPrice,
	HotelPrice,
} from ".";

interface FeaturedDealCardProps {
	hotel: FeaturedDeal;
}

export const FeaturedDealCard: React.FC<FeaturedDealCardProps> = ({ hotel }) => {
	const discountPercentage = Math.round(((hotel.originalRoomPrice - hotel.finalPrice) / hotel.originalRoomPrice) * 100);

	return (
		<HotelCard key={hotel.hotelId}>
			<div className="relative">
				<HotelCardImage src={hotel.roomPhotoUrl} alt={hotel.hotelName} />
				{discountPercentage > 0 && (
					<HotelBadge variant="destructive" className="bg-gold">
						{discountPercentage}% OFF
					</HotelBadge>
				)}
			</div>

			<HotelCardContent>
				<HotelCardTitle>{hotel.hotelName}</HotelCardTitle>
				<HotelCardLocation>{hotel.cityName}</HotelCardLocation>
				<HotelCardRating rating={hotel.hotelStarRating} />

				<HotelPrice>
					<HotelOriginalPrice>{hotel.originalRoomPrice}</HotelOriginalPrice>
					<HotelDiscountedPrice>{hotel.finalPrice}</HotelDiscountedPrice>
					<span className="text-xs text-muted-foreground">/ night</span>
				</HotelPrice>
			</HotelCardContent>
		</HotelCard>
	);
};
