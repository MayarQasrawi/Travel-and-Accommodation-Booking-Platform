import React from "react";
import type { SearchResult } from "../../hooks/useSearchHotels";
import {
	HotelBadge,
	HotelCard,
	HotelCardContent,
	HotelCardImage,
	HotelCardLocation,
	HotelCardRating,
	HotelCardTitle,
	HotelDiscountedPrice,
	HotelMetaInfo,
	HotelOriginalPrice,
	HotelPrice,
} from ".";

interface SearchResultCardProps {
	result: SearchResult;
	onBookNow?: (hotelId: number) => void;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ result, onBookNow }) => {
	const hasDiscount = result.discount > 0;

	const discountedPrice = React.useMemo(() => {
		return hasDiscount ? result.roomPrice - result.discount : result.roomPrice;
	}, [hasDiscount, result.roomPrice, result.discount]);

	const handleBookNow = () => {
		onBookNow?.(result.hotelId);
	};

	return (
		<HotelCard>
			<div className="relative">
				<HotelCardImage src={result.roomPhotoUrl} alt={result.hotelName} />

				{hasDiscount && (
					<HotelBadge variant="destructive" className="bg-gold">
						<span className="font-light flex items-center gap-1">Discount</span>
					</HotelBadge>
				)}
			</div>

			<HotelCardContent>
				<HotelCardTitle>{result.hotelName}</HotelCardTitle>

				<HotelCardLocation>{result.cityName}</HotelCardLocation>

				<HotelCardRating rating={result.starRating} />

				<HotelPrice>
					{hasDiscount && <HotelOriginalPrice>{result.roomPrice}</HotelOriginalPrice>}
					<HotelDiscountedPrice>{discountedPrice}</HotelDiscountedPrice>
					<span className="text-xs text-muted-foreground">/ night</span>
				</HotelPrice>

				<HotelMetaInfo
					roomType={result.roomType}
					numberOfAdults={result.numberOfAdults}
					numberOfChildren={result.numberOfChildren}
					numberOfRooms={result.numberOfRooms}
					checkInDate={result.checkInDate}
					checkOutDate={result.checkOutDate}
					onBookNow={handleBookNow}
					hotelId={result.hotelId}
				/>
			</HotelCardContent>
		</HotelCard>
	);
};
