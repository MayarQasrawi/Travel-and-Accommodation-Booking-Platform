import { useMemo } from "react";
import type { Column } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import type { Room } from "@/Pages/admin/rooms/api/types";

export default function useRoomColumns() {
	return useMemo<Column<Room>[]>(
		() => [
			{ key: "roomNumber", label: "Room Number" },
			{
				key: "availability",
				label: "Availability",
				render: (room) => (
					<Badge variant={room.availability ? "default" : "secondary"}>
						{room.availability ? "Available" : "Unavailable"}
					</Badge>
				),
			},
			{
				key: "price",
				label: "Price",
				render: (room) => `$${room.price}`,
			},
			{ key: "roomType", label: "Type" },
			{ key: "capacityOfAdults", label: "Adults Capacity" },
			{ key: "capacityOfChildren", label: "Children Capacity" },
		],
		[],
	);
}
