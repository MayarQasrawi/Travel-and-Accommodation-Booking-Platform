import { create } from "zustand";

export interface CrudStore<T> {
	formOpen: boolean;
	deleteOpen: boolean;
	selected: T | undefined;

	openCreate: () => void;
	openEdit: (item: T) => void;
	openDelete: (item: T) => void;

	closeForm: () => void;
	closeDelete: () => void;

	reset: () => void;
}

export function createCrudStore<T>() {
	return create<CrudStore<T>>((set) => ({
		formOpen: false,
		deleteOpen: false,
		selected: undefined,

		openCreate: () => set({ formOpen: true, selected: undefined }),
		openEdit: (item) => set({ formOpen: true, selected: item }),
		openDelete: (item) => set({ deleteOpen: true, selected: item }),

		closeForm: () => set({ formOpen: false, selected: undefined }),
		closeDelete: () => set({ deleteOpen: false, selected: undefined }),

		reset: () => set({ formOpen: false, deleteOpen: false, selected: undefined }),
	}));
}
