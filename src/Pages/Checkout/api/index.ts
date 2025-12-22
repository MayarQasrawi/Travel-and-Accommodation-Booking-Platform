import axiosInstance from "../../../services/axios";
import type { BookingConfirmation, CreateBookingData } from "./types";

export const bookingsApi = {
	createBooking: (data: CreateBookingData): Promise<BookingConfirmation> => {
		return axiosInstance.post("/bookings", data).then((response) => response.data);
	},

	getBooking: (bookingId: string): Promise<BookingConfirmation> => {
		return axiosInstance.get(`/bookings/${bookingId}`).then((response) => response.data);
	},

	listBookings: (): Promise<BookingConfirmation[]> => {
		return axiosInstance.get("/bookings").then((response) => response.data);
	},
};
