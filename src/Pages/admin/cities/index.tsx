import { useState } from "react";
import CreateButton from "@/components/admin/CreatButton";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import { CityTable } from "@/Pages/admin/cities/components/CityTable";
import { useCitiesQuery } from "@/Pages/admin/cities/hooks/useCitiesQuery";
import type { City } from "./api/types";
import { CityFormSheet } from "./components/CitySheet";
import { useDeleteCityMutation } from "./hooks/useDeleteCityMutation";

function CitiesPage() {
	const { data, isLoading } = useCitiesQuery();
	const cities = data?.data || [];
	console.log(cities);

	const [dialogOpen, setDialogOpen] = useState(false);
	const [selectedCity, setSelectedCity] = useState<City | undefined>();
	const [cityToDelete, setCityToDelete] = useState<City | undefined>();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

	const deleteMutation = useDeleteCityMutation();

	const handleCreateClick = () => {
		setSelectedCity(undefined);
		setDialogOpen(true);
	};

	const handleRowClick = (city: City) => {
		setSelectedCity(city);
		setDialogOpen(true);
	};

	const handleDeleteClick = (city: City) => {
		setCityToDelete(city);
		setDeleteDialogOpen(true);
	};

	const handleConfirmDelete = async () => {
		if (cityToDelete) {
			await deleteMutation.mutateAsync(cityToDelete.id);
			setDeleteDialogOpen(false);
			setCityToDelete(undefined);
		}
	};

	return (
		<>
			<div className="flex justify-end">
				<CreateButton onClick={handleCreateClick} label="Cities" variant="secondary" />
			</div>
			<CityTable cities={cities} isLoading={isLoading} onDelete={handleDeleteClick} onRowClick={handleRowClick} />
			<CityFormSheet open={dialogOpen} onOpenChange={setDialogOpen} city={selectedCity} />
			<DeleteConfirmDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				itemName={cityToDelete?.name}
				onConfirm={handleConfirmDelete}
				description={`This will permanently delete the city "${cityToDelete?.name}". This action cannot be undone.`}
			/>
		</>
	);
}

export default CitiesPage;
