import { MapPin } from "lucide-react";
import { StarRating } from "@/components/common/StarRating";
import { Card } from "@/Pages/Home/components/hotel-card";
import type { HotelDetails } from "@/types/hotel";
import { ExpandableText } from "./ExpandableText";

interface HotelInfoProps {
	hotel: HotelDetails;
}

export function HotelInfo({ hotel }: HotelInfoProps) {
	return (
		<div className="space-y-4">
			<header className="flex  gap-2 flex-col ">
				<StarRating rating={hotel.starRating} size="md" />
				<h1 className="text-3xl font-bold">{hotel.hotelName}</h1>
				<h2 className="text-sm text-muted-foreground flex ">
					<MapPin className="inline mr-1 w-5 h-5 " />
					{hotel.location}
				</h2>
			</header>

			<ExpandableText text={hotel.description} />
			<Card.Amenities amenities={hotel.amenities} />
		</div>
	);
}
