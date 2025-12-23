import { Star } from "lucide-react";
import { StarRating } from "@/components/common/StarRating";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Review } from "@/types/hotel";
import HotelInfoTitle from "./HotelInfo/HotelInfoTitle";

interface ReviewsListProps {
	reviews: Review[];
}

export function ReviewsList({ reviews }: ReviewsListProps) {
	if (!reviews || reviews.length === 0) {
		return <div className="text-center py-8 text-muted-foreground">No reviews yet</div>;
	}

	const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

	return (
		<section className="space-y-4">
			<div className="flex items-center justify-between ">
				<HotelInfoTitle>Guest Reviews</HotelInfoTitle>
				<div className="flex items-center gap-1">
					<Star size={16} className="fill-yellow-400 text-yellow-400" />
					<span className="font-semibold">{averageRating.toFixed(1)}</span>
					<span className="text-muted-foreground">({reviews.length} reviews)</span>
				</div>
			</div>

			<Carousel opts={{ align: "start" }} className="w-full  " orientation="vertical" role="list">
				<CarouselContent className="max-h-[370px]">
					{reviews.map((review) => (
						<CarouselItem key={review.reviewId} className=" md:basis-1/4">
							<ReviewItem review={review} />
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="absolute bottom-0 left-1/2  ">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
		</section>
	);
}

interface ReviewItemProps {
	review: Review;
}

function ReviewItem({ review }: ReviewItemProps) {
	return (
		<li className="border p-4 rounded bg-primary-foreground ">
			<div className="flex items-center justify-between ">
				<span className="font-semibold">{review.customerName}</span>
				<StarRating rating={review.rating} size="sm" />
			</div>
			<p className="text-muted-foreground text-sm">{review.description}</p>
		</li>
	);
}
