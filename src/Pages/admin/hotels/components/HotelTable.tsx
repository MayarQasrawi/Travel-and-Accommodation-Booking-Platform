import { DataTable } from "@/components/admin/DataTable";
import type { Hotel } from "@/Pages/admin/hotels/api/types";
import { useCitiesQuery } from "../../cities/hooks/useCitiesQuery";
import useHotelColumns from "../hooks/useHotelColumns";

interface HotelTableProps {
	hotels: Hotel[];
	onRowClick: (hotel: Hotel) => void;
	onDelete: (hotel: Hotel) => void;
	isLoading?: boolean;
}

export function HotelTable({ hotels, onRowClick, onDelete, isLoading }: HotelTableProps) {
	const { data } = useCitiesQuery();
	const cities = data?.data || [];

	const columns = useHotelColumns(cities);

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
