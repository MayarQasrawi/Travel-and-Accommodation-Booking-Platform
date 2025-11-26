import { type Column, DataTable } from "@/components/admin/DataTable";
import { Badge } from "@/components/ui/badge";
import type { Room } from "../api/types";

interface RoomsTableProps {
	rooms: Room[];
	onRowClick: (room: Room) => void;
	onDelete: (room: Room) => void;
	isLoading?: boolean;
}

const columns: Column<Room>[] = [
	{
		key: "roomNumber",
		label: "Room Number",
	},
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
	{
		key: "roomType",
		label: "Type",
	},
	{
		key: "capacityOfAdults",
		label: "Adults Capacity",
	},
	{
		key: "capacityOfChildren",
		label: "Children Capacity",
	},
];

export function RoomsTable({ rooms, onRowClick, onDelete, isLoading }: RoomsTableProps) {
	return (
		<DataTable
			columns={columns}
			data={rooms.map((r) => ({ ...r, id: r.roomId }))}
			onRowClick={onRowClick}
			onDelete={onDelete}
			isLoading={isLoading}
			emptyMessage="No rooms found. Create your first room to get started."
		/>
	);
}
