import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BookingConfirmation } from "@/Pages/Checkout/api/types";
import { formatDate } from "@/utils/formatDate";
import { generateBookingPDF } from "./utils/generateBookingPDF";

type Props = {
	booking: BookingConfirmation;
	showDownload?: boolean;
};

export function BookingDetails({ booking, showDownload = false }: Props) {
	const details = [
		{ label: "Customer", value: booking.customerName },
		{ label: "Hotel", value: booking.hotelName },
		{ label: "Room", value: `${booking.roomType} (Room ${booking.roomNumber})` },
		{ label: "Booking Date", value: formatDate(booking.bookingDateTime) },
		{ label: "Payment Method", value: booking.paymentMethod },
		{ label: "Status", value: booking.bookingStatus },
		{ label: "Total Cost", value: `$${booking.totalCost.toFixed(2)}` },
	];

	const handleDownloadPDF = () => {
		const bookingData = {
			confirmationNumber: booking.confirmationNumber,
			customerName: booking.customerName,
			hotelName: booking.hotelName,
			roomType: booking.roomType,
			roomNumber: booking.roomNumber,
			bookingDateTime: formatDate(booking.bookingDateTime),
			paymentMethod: booking.paymentMethod,
			bookingStatus: booking.bookingStatus,
			totalCost: booking.totalCost,
		};

		generateBookingPDF(bookingData);
	};

	return (
		<section className="max-w-xl mx-auto p-6 rounded border">
			<header className="mb-4 flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Booking Confirmed</h1>
				{showDownload && (
					<Button onClick={handleDownloadPDF} variant="outline" size="sm">
						<Download className=" h-4 w-4" />
					</Button>
				)}
			</header>

			<dl className="space-y-2 text-sm">
				{details.map((detail) => (
					<Detail key={detail.label} label={detail.label} value={detail.value} />
				))}
			</dl>

			<footer className="mt-6 p-4 bg-muted rounded-lg text-center">
				<p className="text-sm text-muted-foreground">Confirmation Number</p>
				<p className="text-lg font-mono font-semibold">{booking.confirmationNumber}</p>
			</footer>
		</section>
	);
}

function Detail({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex justify-between">
			<dt className="text-muted-foreground">{label}</dt>
			<dd className="font-medium">{value}</dd>
		</div>
	);
}

export default BookingDetails;
