import axiosInstance from "../../../services/axios";
import type { BookingResponse, CreateBookingData } from "./types";

export const bookingsApi = {
	createBooking: (data: CreateBookingData): Promise<BookingResponse> => {
		return axiosInstance.post("/bookings", data).then((response) => response.data);
	},

	getBooking: (bookingId: string): Promise<BookingResponse> => {
		return axiosInstance.get(`/bookings/${bookingId}`).then((response) => response.data);
	},

	listBookings: (): Promise<BookingResponse[]> => {
		return axiosInstance.get("/bookings").then((response) => response.data);
	},
};
