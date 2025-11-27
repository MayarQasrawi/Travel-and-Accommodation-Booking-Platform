import DeleteConfirmDialog from "../common/DeleteConfirmDialog";
import CreateButton from "./CreatButton";
import Header from "./Header";
import Title from "./Title";

interface CrudPageProps<T extends { id: number; name: string }> {
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
			<main className="flex-1 overflow-y-auto p-4">
				<Header />
				<div className="space-y-6 p-6">
					<div className="flex items-center justify-between">
						<Title section={label} description={`Manage ${label} for your travel platform`} />
					</div>

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
				</div>
			</main>
		</>
	);
}
