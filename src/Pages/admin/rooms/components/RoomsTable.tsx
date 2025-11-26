import { DataTable } from "@/components/admin/DataTable";
import type { Room } from "../api/types";
import useRoomColumns from "../hooks/useRoomColumns";

interface RoomsTableProps {
	rooms: Room[];
	onRowClick: (room: Room) => void;
	onDelete: (room: Room) => void;
	isLoading?: boolean;
}

export function RoomsTable({ rooms, onRowClick, onDelete, isLoading }: RoomsTableProps) {
	const columns = useRoomColumns();

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
