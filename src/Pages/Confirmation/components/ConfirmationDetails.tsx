import { useSearchParams } from "react-router-dom";
import { Loader } from "@/components/common/Loader";
import EmptyCart from "@/Pages/Booking/EmptyState";
import { useGetBookingById } from "../hooks/useGetBooking";
import BookingDetails from "./BookingDetails";

function ConfirmationDetails() {
	const [searchParams] = useSearchParams();
	const bookingId = searchParams.get("bookingId") || undefined;
	const { data, isLoading, error } = useGetBookingById(bookingId);

	if (isLoading) return <Loader className="w-32 h-32" />;
	if (error || !data) return <EmptyCart />;

	return <BookingDetails booking={data} showDownload />;
}

export default ConfirmationDetails;
