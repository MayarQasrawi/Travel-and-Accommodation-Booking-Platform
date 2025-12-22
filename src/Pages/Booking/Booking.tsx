import { Loader } from "@/components/common/Loader";
import BookingDetails from "@/Pages/Confirmation/components/BookingDetails";
import EmptyCart from "./EmptyState";
import { useGetBookings } from "./hooks/useGetBookings";

function Booking() {
	const { data, isLoading, error } = useGetBookings();

	if (isLoading) return <Loader className="w-32 h-32" />;
	if (error || !data || data.length === 0) return <EmptyCart />;

	return (
		<div className="space-y-4">
			{data.map((booking) => (
				<BookingDetails key={booking.confirmationNumber} booking={booking} showDownload />
			))}
		</div>
	);
}

export default Booking;
