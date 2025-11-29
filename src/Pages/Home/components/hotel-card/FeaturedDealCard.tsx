import type { Hotel } from "@/Pages/admin/hotels/api/types";
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
	hotel: Hotel;
}

export const FeaturedDealCard: React.FC<FeaturedDealCardProps> = ({ hotel }) => (
	<HotelCard key={hotel.id}>
		<div className="relative">
			<HotelCardImage src={hotel.image} alt={hotel.name} />
			<HotelBadge>{hotel.discount}</HotelBadge>
		</div>

		<HotelCardContent>
			<HotelCardTitle>{hotel.name}</HotelCardTitle>
			<HotelCardLocation>{hotel.location}</HotelCardLocation>
			<HotelCardRating rating={hotel.starRating} />

			<HotelPrice>
				<HotelOriginalPrice>{hotel.originalPrice}</HotelOriginalPrice>
				<HotelDiscountedPrice>{hotel.discountedPrice}</HotelDiscountedPrice>
				<span className="text-xs text-muted-foreground">/ night</span>
			</HotelPrice>
		</HotelCardContent>
	</HotelCard>
);
