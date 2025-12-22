import { MapPin } from "lucide-react";
import { StarRating } from "@/components/common/StarRating";
import type { HotelDetails } from "@/types/hotel";
import { HotelMap } from "../HotelMap";
import { ExpandableText } from "./ExpandableText";
import { HotelAmenities } from "./HotelAmenities";
import HotelInfoTitle from "./HotelInfoTitle";

interface HotelInfoProps {
	hotel: HotelDetails;
}

export function HotelInfo({ hotel }: HotelInfoProps) {
	return (
		<div className="space-y-10">
			<header className="flex  gap-2 flex-col ">
				<StarRating rating={hotel.starRating} size="md" />
				<h1 className="text-3xl font-bold">{hotel.hotelName}</h1>
				<h2 className="text-sm text-muted-foreground flex ">
					<MapPin className="inline mr-1 w-5 h-5 " />
					{hotel.location}
				</h2>
			</header>

			{hotel.description && (
				<>
					{/* <HotelInfoTitle>Description</HotelInfoTitle> */}
					<ExpandableText text={hotel.description} />
					<p className="leading-relaxed"></p>
				</>
			)}
			{hotel?.amenities.length > 0 && (
				<section>
					<HotelInfoTitle>Amenities</HotelInfoTitle>
					{hotel?.amenities && <HotelAmenities amenities={hotel.amenities} />}
				</section>
			)}
			<section>
				<HotelInfoTitle>Location</HotelInfoTitle>

				<HotelMap
					hotel={{
						lat: hotel.latitude,
						lng: hotel.longitude,
						hotelName: hotel.hotelName,
					}}
					attractions={hotel.attractions ?? []}
				/>
			</section>
		</div>
	);
}
