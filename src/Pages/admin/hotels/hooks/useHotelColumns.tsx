import { useMemo } from "react";
import type { Column } from "@/components/admin/DataTable";
import { StarRating } from "@/components/common/StarRating";
import type { Hotel } from "@/Pages/admin/hotels/api/types";

export default function useHotelColumns(cities: { id: number; name: string }[]) {
	return useMemo<Column<Hotel>[]>(
		() => [
			{ key: "hotelName", label: "Name" },
			{ key: "starRating", label: "Star Rating", render: (hotel) => <StarRating rating={hotel.starRating} /> },
			{ key: "hotelType", label: "Hotel Type" },
			{ key: "location", label: "Location" },
			{
				key: "cityId",
				label: "City",
				render: (hotel) => cities.find((c) => c.id === hotel.cityId)?.name ?? `City ${hotel.cityId}`,
			},
			{ key: "availableRooms", label: "Rooms" },
		],
		[cities],
	);
}
