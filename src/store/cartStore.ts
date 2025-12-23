import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { CART_KEY } from "@/constants/storage";
import type { HotelDetails, Room } from "@/types/hotel";

export interface CartItem {
	room: Room;
	hotel: HotelDetails;
	checkInDate: string; // Store as ISO strings
	checkOutDate: string;
	pricePerNight: number;
}

interface CartStore {
	cartItems: CartItem[];
	selectedIndex: number | null;
	setSelectedIndex: (roomId: number | null) => void;
	addToCart: (room: Room, hotel: HotelDetails, checkInDate: Date, checkOutDate: Date, pricePerNight: number) => void;
	removeFromCart: (roomId: number) => void;
	clearCart: () => void;
}

const customStorage = createJSONStorage(() => ({
	getItem: (key: string) => {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : null;
	},
	setItem: (key: string, value: unknown) => {
		localStorage.setItem(key, JSON.stringify(value));
	},
	removeItem: (key: string) => {
		localStorage.removeItem(key);
	},
}));

function calculateNights(checkInDate: string, checkOutDate: string): number {
	const checkIn = new Date(checkInDate);
	const checkOut = new Date(checkOutDate);
	const diffMs = checkOut.getTime() - checkIn.getTime();
	return Math.max(Math.ceil(diffMs / (1000 * 60 * 60 * 24)), 1);
}

export const useCartStore = create<CartStore>()(
	persist(
		(set) => ({
			cartItems: [],
			selectedIndex: null,

			setSelectedIndex: (roomId) => set({ selectedIndex: roomId }),

			addToCart: (room, hotel, checkInDate, checkOutDate, pricePerNight) => {
				set((state) => {
					const exists = state.cartItems.some(
						(item) =>
							item.room.roomId === room.roomId &&
							item.checkInDate === checkInDate.toISOString() &&
							item.checkOutDate === checkOutDate.toISOString() &&
							item.pricePerNight === pricePerNight,
					);

					if (exists) return state; // Do not add duplicate

					return {
						cartItems: [
							...state.cartItems,
							{
								room,
								hotel,
								checkInDate: checkInDate.toISOString(),
								checkOutDate: checkOutDate.toISOString(),
								pricePerNight,
							},
						],
					};
				});
			},

			removeFromCart: (roomId) =>
				set((state) => ({
					cartItems: state.cartItems.filter((item) => !(item.room.roomId === roomId)),
				})),

			clearCart: () => set({ cartItems: [], selectedIndex: null }),
		}),
		{
			name: CART_KEY,
			storage: customStorage,
		},
	),
);

// Selectors

export const selectTotalPrice = (state: CartStore) =>
	state.cartItems.reduce((total, item) => {
		const nights = calculateNights(item.checkInDate, item.checkOutDate);
		return total + item.pricePerNight * nights;
	}, 0);

export const selectTotalNights = (state: CartStore) => {
	if (state.cartItems.length === 0) return 0;
	const first = state.cartItems[0];
	return calculateNights(first.checkInDate, first.checkOutDate);
};

export const selectSelectedItem = (state: CartStore) => {
	if (state.selectedIndex === null) return null;
	return state.cartItems[state.selectedIndex] ?? null;
};
