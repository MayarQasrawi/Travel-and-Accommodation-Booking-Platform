import { CrudPage } from "@/components/admin/CrudPage";
import { useHotelStore } from "@/store/hotelStore";
import { HotelFormSheet } from "./components/HotelSheet";
import { HotelTable } from "./components/HotelTable";
import { useDeleteHotelMutation } from "./hooks/useDeleteHotelMutation";
import { useHotelsQuery } from "./hooks/useHotelsQuery";

function HotelsPage() {
	const store = useHotelStore();
	const { data, isLoading } = useHotelsQuery({ search: store.searchQuery });
	const hotels = data || [];
	const deleteMutation = useDeleteHotelMutation();

	const handleSearch = (query: string) => {
		store.setSearchQuery(query);
	};

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
			onSearch={handleSearch}
			searchPlaceholder="Search hotels by name or description..."
		/>
	);
}

export default HotelsPage;
