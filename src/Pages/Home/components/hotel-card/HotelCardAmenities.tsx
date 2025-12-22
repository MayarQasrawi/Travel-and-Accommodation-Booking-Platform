import type { RoomAmenity } from "@/types/hotel";

interface HotelCardAmenitiesProps {
	amenities: RoomAmenity[];
}

export function HotelCardAmenities({ amenities }: HotelCardAmenitiesProps) {
	if (!amenities || amenities.length === 0) return null;

	return (
		<div className="flex flex-wrap gap-2">
			{amenities.map((amenity) => (
				<span
					key={amenity.name}
					className="text-xs px-2 py-1 bg-muted-foreground/30 rounded-full "
					title={amenity.description}
				>
					{amenity.name}
				</span>
			))}
		</div>
	);
}
