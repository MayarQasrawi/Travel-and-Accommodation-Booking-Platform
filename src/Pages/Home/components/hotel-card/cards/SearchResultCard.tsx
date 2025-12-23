import type React from "react";
import { discountPercentage } from "@/utils/discountPercentage";
import type { Hotel } from "../../../hooks/useSearchHotels";
import { Card } from "..";

interface SearchResultCardProps {
	result: Hotel;
	onBookNow?: (hotelId: number) => void;
}

export const SearchResultCard: React.FC<SearchResultCardProps> = ({ result, onBookNow }) => {
	const hasDiscount = result.discount > 0;
	const discountedPrice = hasDiscount ? result.roomPrice - result.discount : result.roomPrice;
	const discount = discountPercentage({
		originalPrice: result.roomPrice,
		finalPrice: discountedPrice,
	});

	const handleBookNow = () => {
		onBookNow?.(result.hotelId);
	};

	return (
		<Card>
			<div className="relative">
				<Card.Image src={result.roomPhotoUrl} alt={result.hotelName} />

				{hasDiscount && (
					<Card.Badge variant="destructive" className="bg-gold absolute top-2 left-2">
						<span className="font-light flex items-center gap-1">{discount}% OFF</span>
					</Card.Badge>
				)}
			</div>

			<Card.Content>
				<Card.Title>{result.hotelName}</Card.Title>
				<Card.Location>{result.cityName}</Card.Location>
				<Card.Rating rating={result.starRating} />

				<Card.Price>
					{hasDiscount && <Card.OriginalPrice>{result.roomPrice}</Card.OriginalPrice>}
					<Card.DiscountedPrice>{discountedPrice}</Card.DiscountedPrice>
				</Card.Price>

				<Card.Info
					roomType={result.roomType}
					numberOfAdults={result.numberOfAdults}
					numberOfChildren={result.numberOfChildren}
					numberOfRooms={result.numberOfRooms}
					checkInDate={result.checkInDate}
					checkOutDate={result.checkOutDate}
					onBookNow={handleBookNow}
					hotelId={result.hotelId}
				/>
			</Card.Content>
		</Card>
	);
};
