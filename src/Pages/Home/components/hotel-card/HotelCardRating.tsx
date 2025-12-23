import type React from "react";
import { StarRating } from "@/components/common/StarRating";

interface Props {
	rating: number;
	maxRating?: number;
}

export const HotelCardRating: React.FC<Props> = ({ rating, maxRating = 5 }) => {
	return <StarRating max={maxRating} rating={rating} />;
};
