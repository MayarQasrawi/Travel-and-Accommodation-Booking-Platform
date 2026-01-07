import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingsApi } from "@/Pages/Checkout/api";
import type { CreateBookingData } from "@/Pages/Checkout/api/types";

export function useCreateBookingMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateBookingData) => bookingsApi.createBooking(data),
		onSuccess: (data) => {
			queryClient.invalidateQueries({ queryKey: ["bookings"] });
			queryClient.setQueryData(["booking", data.confirmationNumber], data);
		},
		onError: (error: Error) => {
			console.error("Error creating booking:", error);
		},
	});
}
