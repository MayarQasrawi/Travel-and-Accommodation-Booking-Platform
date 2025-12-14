import { Star } from "lucide-react";
import type { FC } from "react";

interface StarRatingProps {
	rating: number;
	max?: number;
	className?: string;

	/** sm = 16px, md = 20px, lg = 24px
	 * @default  md
	 */
	size?: "sm" | "md" | "lg";
}

export const StarRating: FC<StarRatingProps> = ({ rating, max = 5, className, size = "md" }) => {
	const stars = Array.from({ length: max }, (_, i) => i + 1);

	const sizeClasses = {
		sm: "h-3 w-3",
		md: "h-4 w-4",
		lg: "h-6 w-6",
	} as const;

	return (
		<div className={`flex items-center gap-1 ${className ?? ""}`}>
			{stars.map((value) => (
				<Star
					key={value}
					className={`${sizeClasses[size]}  ${
						value <= rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
					}`}
				/>
			))}
		</div>
	);
};
