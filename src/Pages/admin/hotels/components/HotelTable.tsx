import { useMemo } from "react";
import { type Column, DataTable } from "@/components/admin/DataTable";
import { StarRating } from "@/components/admin/StarRating";
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
				render: (hotel) => <StarRating rating={hotel.starRating} />,
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
