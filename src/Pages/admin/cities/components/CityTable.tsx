"use client";

import { type Column, DataTable } from "@/components/admin/DataTable";
import type { City } from "@/Pages/admin/cities/api/types";

interface CityTableProps {
	cities: City[];
	onRowClick: (city: City) => void;
	onDelete: (city: City) => void;
	isLoading?: boolean;
}
const columns: Column<City>[] = [
	{ key: "name", label: "Name" },
	{
		key: "description",
		label: "Description",
		render: (row) => (
			<div className="line-clamp-5 whitespace-normal max-w-4xl wrap-break-word" title={row.description}>
				{row.description}
			</div>
		),
	},
];

export function CityTable({ cities, onRowClick, onDelete, isLoading }: CityTableProps) {
	return (
		<DataTable
			columns={columns}
			data={cities}
			onRowClick={onRowClick}
			onDelete={onDelete}
			isLoading={isLoading}
			emptyMessage="No cities found. Create your first city to get started."
		/>
	);
}
