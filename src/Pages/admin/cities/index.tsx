import { CrudPage } from "@/components/admin/CrudPage";
import { useCityStore } from "@/store/cityStore";
import { CityFormSheet } from "./components/CitySheet";
import { CityTable } from "./components/CityTable";
import { useCitiesQuery } from "./hooks/useCitiesQuery";
import { useDeleteCityMutation } from "./hooks/useDeleteCityMutation";

function CitiesPage() {
	const store = useCityStore();
	const { data, isLoading } = useCitiesQuery({ search: store.searchQuery });
	const cities = data || [];
	const deleteMutation = useDeleteCityMutation();

	const handleSearch = (query: string) => {
		store.setSearchQuery(query);
	};

	return (
		<CrudPage
			label="Cities"
			table={
				<CityTable cities={cities} isLoading={isLoading} onRowClick={store.openEdit} onDelete={store.openDelete} />
			}
			form={<CityFormSheet open={store.formOpen} onOpenChange={store.closeForm} city={store.selected} />}
			store={useCityStore}
			onDelete={async (city) => {
				await deleteMutation.mutateAsync(city.id);
			}}
			onSearch={handleSearch}
			searchPlaceholder="Search cities by name..."
		/>
	);
}

export default CitiesPage;
