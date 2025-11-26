import { useState } from "react";
import CreateButton from "@/components/admin/CreatButton";
import DeleteConfirmDialog from "@/components/common/DeleteConfirmDialog";
import type { Hotel } from "./api/types";
import { HotelFormSheet } from "./components/HotelSheet";
import { HotelTable } from "./components/HotelTable";
import { useDeleteHotelMutation } from "./hooks/useDeleteHotelMutation";
import { useHotelsQuery } from "./hooks/useHotelsQuery";

function HotelsPage() {
	const { data, isLoading } = useHotelsQuery();
	const hotels = data?.data || [];

	const [formOpen, setFormOpen] = useState(false);
	const [selectedHotel, setSelectedHotel] = useState<Hotel | undefined>();
	const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
	const [hotelToDelete, setHotelToDelete] = useState<Hotel | undefined>();

	const deleteMutation = useDeleteHotelMutation();

	const handleCreateClick = () => {
		setSelectedHotel(undefined);
		setFormOpen(true);
	};

	const handleRowClick = (hotel: Hotel) => {
		setSelectedHotel(hotel);
		setFormOpen(true);
	};

	const handleDeleteClick = (hotel: Hotel) => {
		setHotelToDelete(hotel);
		setDeleteDialogOpen(true);
	};

	const handleConfirmDelete = async () => {
		if (hotelToDelete) {
			await deleteMutation.mutateAsync(hotelToDelete.id);
			setDeleteDialogOpen(false);
			setHotelToDelete(undefined);
		}
	};

	return (
		<>
			<div className="flex justify-end">
				<CreateButton onClick={handleCreateClick} label="Hotels" variant="secondary" />
			</div>

			<HotelTable hotels={hotels} isLoading={isLoading} onRowClick={handleRowClick} onDelete={handleDeleteClick} />

			<HotelFormSheet open={formOpen} onOpenChange={setFormOpen} hotel={selectedHotel} />

			<DeleteConfirmDialog
				open={deleteDialogOpen}
				onOpenChange={setDeleteDialogOpen}
				itemName={hotelToDelete?.name}
				onConfirm={handleConfirmDelete}
				description={`This will permanently delete the hotel "${hotelToDelete?.name}". This action cannot be undone.`}
			/>
		</>
	);
}

export default HotelsPage;
