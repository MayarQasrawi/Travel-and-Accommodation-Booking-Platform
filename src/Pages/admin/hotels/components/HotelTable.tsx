import { Star } from "lucide-react";
import { useMemo } from "react";
import { type Column, DataTable } from "@/components/admin/DataTable";
import type { Hotel } from "@/Pages/admin/hotels/api/types";
import { useCitiesQuery } from "../../cities/hooks/useCitiesQuery";

interface HotelTableProps {
	hotels: Hotel[];
	onRowClick: (hotel: Hotel) => void;
	onDelete: (hotel: Hotel) => void;
	isLoading?: boolean;
}

export function HotelTable({ hotels, onRowClick, onDelete, isLoading }: HotelTableProps) {
	const { data } = useCitiesQuery();
	const cities = data?.data || [];

	const columns: Column<Hotel>[] = useMemo(
		() => [
			{
				key: "hotelName",
				label: "Name",
			},
			{
				key: "starRating",
				label: "Star Rating",
				render: (hotel) => (
					<div className="flex items-center gap-1">
						{[1, 2, 3, 4, 5].map((value) => (
							<Star
								key={value}
								className={`h-4 w-4 ${
									value <= hotel.starRating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
								}`}
							/>
						))}
					</div>
				),
			},
			{
				key: "hotelType",
				label: "Hotel Type",
			},

			{
				key: "location",
				label: "Location",
			},
			{
				key: "cityId",
				label: "City",
				render: (hotel) => {
					const city = cities.find((c) => c.id === hotel.cityId);
					return city?.name || `City ${hotel.cityId}`;
				},
			},
			{
				key: "availableRooms",
				label: "Rooms",
			},
		],
		[cities],
	);

	return (
		<DataTable
			columns={columns}
			data={hotels}
			onRowClick={onRowClick}
			onDelete={onDelete}
			isLoading={isLoading}
			emptyMessage="No hotels found. Create your first hotel to get started."
		/>
	);
}
