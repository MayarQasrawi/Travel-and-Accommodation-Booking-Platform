import { useQuery } from "@tanstack/react-query";
import { bookingsApi } from "@/Pages/Checkout/api";
import type { BookingConfirmation } from "@/Pages/Checkout/api/types";

export function useGetBookings() {
	return useQuery<BookingConfirmation[]>({
		queryKey: ["bookings"],
		queryFn: () => bookingsApi.listBookings(),
	});
}
