import { useQuery } from "@tanstack/react-query";
import { bookingsApi } from "@/Pages/Checkout/api";
import type { BookingConfirmation } from "@/store/bookingStore";

export function useGetBookingById(bookingId?: string) {
	return useQuery<BookingConfirmation>({
		queryKey: ["booking", bookingId],
		queryFn: () => bookingsApi.getBooking(bookingId!),
		enabled: !!bookingId,
	});
}
