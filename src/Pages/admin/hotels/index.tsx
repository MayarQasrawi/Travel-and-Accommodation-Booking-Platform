import { CrudPage } from "@/components/admin/CrudPage";
import { useHotelStore } from "@/store/hotelStore";
import { HotelFormSheet } from "./components/HotelSheet";
import { HotelTable } from "./components/HotelTable";
import { useDeleteHotelMutation } from "./hooks/useDeleteHotelMutation";
import { useHotelsQuery } from "./hooks/useHotelsQuery";

function HotelsPage() {
	const { data, isLoading } = useHotelsQuery();
	const hotels = data?.data || [];
	const store = useHotelStore();
	const deleteMutation = useDeleteHotelMutation();

	return (
		<CrudPage
			label="Hotels"
			table={
				<HotelTable hotels={hotels} isLoading={isLoading} onRowClick={store.openEdit} onDelete={store.openDelete} />
			}
			form={<HotelFormSheet open={store.formOpen} onOpenChange={store.closeForm} hotel={store.selected} />}
			store={useHotelStore}
			onDelete={async (hotel) => {
				await deleteMutation.mutateAsync(hotel.id);
			}}
		/>
	);
}

export default HotelsPage;
