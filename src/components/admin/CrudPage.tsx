import DeleteConfirmDialog from "../common/DeleteConfirmDialog";
import CreateButton from "./CreatButton";

interface CrudPageProps<T extends { id: string | number; name: string }> {
	label: string;
	table: React.ReactNode;
	form: React.ReactNode;
	store: any; // Zustand store instance
	onDelete: (item: T) => Promise<void>;
}

export function CrudPage<T extends { id: number; name: string }>({
	label,
	table,
	form,
	store,
	onDelete,
}: CrudPageProps<T>) {
	const { deleteOpen, selected, openCreate, closeDelete } = store();

	return (
		<>
			<div className="flex justify-end">
				<CreateButton onClick={openCreate} label={label} variant="secondary" />
			</div>

			{table}
			{form}

			<DeleteConfirmDialog
				open={deleteOpen}
				onOpenChange={closeDelete}
				itemName={selected?.name}
				onConfirm={() => selected && onDelete(selected)}
				description={`This will permanently delete "${selected?.name}". This action cannot be undone.`}
			/>
		</>
	);
}
