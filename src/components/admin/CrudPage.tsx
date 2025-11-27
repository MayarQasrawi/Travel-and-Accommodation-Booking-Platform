import DeleteConfirmDialog from "../common/DeleteConfirmDialog";
import CreateButton from "./CreatButton";
import Header from "./Header";
import Title from "./Title";

interface CrudPageProps<T extends { id: number; name: string }> {
	label: string;
	table: React.ReactNode;
	form: React.ReactNode;
	store: any;
	onDelete: (item: T) => Promise<void>;
	onSearch?: (query: string) => void;
	searchPlaceholder?: string;
}

export function CrudPage<T extends { id: number; name: string }>({
	label,
	table,
	form,
	store,
	onDelete,
	onSearch,
	searchPlaceholder,
}: CrudPageProps<T>) {
	const { deleteOpen, selected, openCreate, closeDelete } = store();

	return (
		<>
			<main className="flex flex-col p-4 space-y-6">
				<Header onSearch={onSearch} searchPlaceholder={searchPlaceholder || `Search ${label.toLowerCase()}...`} />
				<div className="flex items-center justify-between">
					<Title section={label} description={`Manage ${label} for your travel platform`} />
					<CreateButton onClick={openCreate} label={label} variant="secondary" />
				</div>
				<div className="overflow-y-auto max-w-screen">{table}</div>
				{form}

				<DeleteConfirmDialog
					open={deleteOpen}
					onOpenChange={closeDelete}
					itemName={selected?.name}
					onConfirm={() => selected && onDelete(selected)}
					description={`This will permanently delete "${selected?.name}". This action cannot be undone.`}
				/>
			</main>
		</>
	);
}
