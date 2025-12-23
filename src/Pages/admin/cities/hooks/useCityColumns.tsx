import { useMemo } from "react";
import type { Column } from "@/components/admin/DataTable";
import type { City } from "@/Pages/admin/cities/api/types";

export default function useCityColumns() {
	return useMemo<Column<City>[]>(
		() => [
			{ key: "name", label: "Name" },
			{
				key: "description",
				label: "Description",
				render: (city) => (
					<div className="line-clamp-5 whitespace-normal max-w-4xl " title={city.description}>
						{city.description}
					</div>
				),
			},
		],
		[],
	);
}
