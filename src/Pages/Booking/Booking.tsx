import { Loader } from "@/components/common/Loader";
import PageHeader from "@/components/common/PageHeader";
import BookingDetails from "@/Pages/Confirmation/components/BookingDetails";
import EmptyCart from "./EmptyState";
import { useGetBookings } from "./hooks/useGetBookings";

function Booking() {
	const { data, isLoading, error } = useGetBookings();

	if (isLoading) return <Loader className="w-32 h-32 mx-auto mt-20" />;
	if (error || !data || data.length === 0) return <EmptyCart />;

	return (
		<section className="container p-4 md:p-10 min-h-screen justify-center">
			<PageHeader title="Your Bookings" subtitle="See details of all your confirmed bookings" />

			<main className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{data.map((booking) => (
					<div key={booking.confirmationNumber}>
						<BookingDetails booking={booking} showDownload />
					</div>
				))}
			</main>
		</section>
	);
}

export default Booking;
