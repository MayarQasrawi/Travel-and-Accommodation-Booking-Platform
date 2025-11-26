import { useState } from "react";
import CreateButton from "@/components/admin/CreatButton";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import type { Room } from "./api/types";
import { RoomFormSheet } from "./components/RoomSheet";
import { RoomsTable } from "./components/RoomsTable";
import { useDeleteRoomMutation } from "./hooks/useDeleteRoomMutation";
import { useRoomsQuery } from "./hooks/useRoomsQuery";

function RoomsPage() {
	const { data, isLoading } = useRoomsQuery();
	const rooms = data?.data || [];

	const [formOpen, setFormOpen] = useState(false);
	const [selectedRoom, setSelectedRoom] = useState<Room | undefined>();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [roomToDelete, setRoomToDelete] = useState<Room | undefined>();

	const deleteMutation = useDeleteRoomMutation();

	const handleCreateClick = () => {
		setSelectedRoom(undefined);
		setFormOpen(true);
	};

	const handleRowClick = (room: Room) => {
		setSelectedRoom(room);
		setFormOpen(true);
	};

	const handleDeleteClick = (room: Room) => {
		setRoomToDelete(room);
		setDeleteDialogOpen(true);
	};

	const handleConfirmDelete = async () => {
		if (roomToDelete) {
			await deleteMutation.mutateAsync(roomToDelete.id);
			setDeleteDialogOpen(false);
			setRoomToDelete(undefined);
		}
	};

	return (
		<>
			<div className="flex justify-end">
				<CreateButton onClick={handleCreateClick} label="Rooms" variant="secondary" />
			</div>

			<RoomsTable rooms={rooms} isLoading={isLoading} onRowClick={handleRowClick} onDelete={handleDeleteClick} />

			<RoomFormSheet open={formOpen} onOpenChange={setFormOpen} room={selectedRoom} />

			<DeleteConfirmDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				itemName={roomToDelete?.roomNumber}
				onConfirm={handleConfirmDelete}
				description={`This will permanently delete the room "${roomToDelete?.roomNumber}". This action cannot be undone.`}
			/>
		</>
	);
}

export default RoomsPage;
