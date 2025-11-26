import { DataTable } from "@/components/admin/DataTable";
import type { City } from "@/Pages/admin/cities/api/types";
import useCityColumns from "../hooks/useCityColumns";

interface CityTableProps {
	cities: City[];
	onRowClick: (city: City) => void;
	onDelete: (city: City) => void;
	isLoading?: boolean;
}

export function CityTable({ cities, onRowClick, onDelete, isLoading }: CityTableProps) {
	const columns = useCityColumns();

	return (
		<DataTable
			columns={columns}
			data={cities.map((c) => ({ ...c, id: c.id }))} // ensures DataTable has an 'id'
			onRowClick={onRowClick}
			onDelete={onDelete}
			isLoading={isLoading}
			emptyMessage="No cities found. Create your first city to get started."
		/>
	);
}
