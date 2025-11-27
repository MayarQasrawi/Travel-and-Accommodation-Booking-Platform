import { CrudPage } from "@/components/admin/CrudPage";
import { useRoomStore } from "@/store/roomStore";
import { RoomFormSheet } from "./components/RoomSheet";
import { RoomsTable } from "./components/RoomsTable";
import { useDeleteRoomMutation } from "./hooks/useDeleteRoomMutation";
import { useRoomsQuery } from "./hooks/useRoomsQuery";

function RoomsPage() {
	const { data, isLoading } = useRoomsQuery();
	const rooms = data?.data || [];
	const store = useRoomStore();
	const deleteMutation = useDeleteRoomMutation();

	return (
		<CrudPage
			label="Rooms"
			table={<RoomsTable rooms={rooms} isLoading={isLoading} onRowClick={store.openEdit} onDelete={store.openDelete} />}
			form={<RoomFormSheet open={store.formOpen} onOpenChange={store.closeForm} room={store.selected} />}
			store={useRoomStore}
			onDelete={async (room) => {
				await deleteMutation.mutateAsync(room.roomId);
			}}
		/>
	);
}

export default RoomsPage;
