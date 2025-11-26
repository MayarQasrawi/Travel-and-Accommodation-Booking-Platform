import { Star } from "lucide-react";
import type { FC } from "react";

interface StarRatingProps {
	rating: number;

	/**
	 * The total number of stars to display.
	 * Example: max={10} will show a 10-star scale.
	 *  @default 5
	 */
	max?: number;
}

export const StarRating: FC<StarRatingProps> = ({ rating, max = 5 }) => {
	const stars = Array.from({ length: max }, (_, i) => i + 1);

	return (
		<div className="flex items-center gap-1">
			{stars.map((value) => (
				<Star
					key={value}
					className={`h-4 w-4 ${value <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
				/>
			))}
		</div>
	);
};
