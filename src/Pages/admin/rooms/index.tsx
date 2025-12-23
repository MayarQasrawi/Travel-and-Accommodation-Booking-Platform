import { CrudPage } from "@/components/admin/CrudPage";
import { useRoomStore } from "@/store/roomStore";
import { RoomFormSheet } from "./components/RoomSheet";
import { RoomsTable } from "./components/RoomsTable";
import { useDeleteRoomMutation } from "./hooks/useDeleteRoomMutation";
import { useRoomsQuery } from "./hooks/useRoomsQuery";

function RoomsPage() {
	const store = useRoomStore();
	const { data, isLoading } = useRoomsQuery({ search: store.searchQuery });
	console.log("rooms:", data);
	const rooms = data || [];
	const deleteMutation = useDeleteRoomMutation();
	const handleSearch = (query: string) => {
		store.setSearchQuery(query);
	};

	return (
		<CrudPage
			label="Rooms"
			table={<RoomsTable rooms={rooms} isLoading={isLoading} onRowClick={store.openEdit} onDelete={store.openDelete} />}
			form={<RoomFormSheet open={store.formOpen} onOpenChange={store.closeForm} room={store.selected} />}
			store={useRoomStore}
			onSearch={handleSearch}
			onDelete={async (room) => {
				await deleteMutation.mutateAsync(room?.roomId);
			}}
			searchPlaceholder="Search rooms by number..."
		/>
	);
}

export default RoomsPage;
