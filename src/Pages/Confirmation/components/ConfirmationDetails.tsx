import { Download } from "lucide-react";
import { useParams } from "react-router-dom";
import { Loader } from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import EmptyCart from "@/Pages/Booking/EmptyState";
import { formatDate } from "@/utils/formatDate";
import { useGetBookingById } from "../hooks/useGetBooking";
import { generateBookingPDF } from "./utils/generateBookingPDF";

function ConfirmationDetails() {
	const { bookingId } = useParams<{ bookingId: string }>();
	const { data, isLoading, error } = useGetBookingById(bookingId);

	const handleDownloadPDF = () => {
		if (!data) return;

		const bookingData = {
			confirmationNumber: data.confirmationNumber,
			customerName: data.customerName,
			hotelName: data.hotelName,
			roomType: data.roomType,
			roomNumber: data.roomNumber,
			bookingDateTime: formatDate(data.bookingDateTime),
			paymentMethod: data.paymentMethod,
			bookingStatus: data.bookingStatus,
			totalCost: data.totalCost,
		};

		generateBookingPDF(bookingData);
	};

	if (isLoading) {
		return <Loader className="w-32 h-32" />;
	}

	if (error || !data) {
		return <EmptyCart />;
	}

	const details = [
		{ label: "Customer", value: data.customerName },
		{ label: "Hotel", value: data.hotelName },
		{ label: "Room", value: `${data.roomType} (Room ${data.roomNumber})` },
		{
			label: "Booking Date",
			value: formatDate(data.bookingDateTime),
		},
		{ label: "Payment Method", value: data.paymentMethod },
		{ label: "Status", value: data.bookingStatus },
		{ label: "Total Cost", value: `$${data.totalCost.toFixed(2)}` },
	];

	return (
		<section className="max-w-xl mx-auto p-6 rounded border">
			<header className="mb-4 flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Booking Confirmed</h1>
				<Button onClick={handleDownloadPDF} variant="outline" size="sm">
					<Download className=" h-4 w-4" />
				</Button>
			</header>

			<dl className="space-y-2 text-sm">
				{details.map((detail) => (
					<Detail key={detail.label} label={detail.label} value={detail.value} />
				))}
			</dl>

			<footer className="mt-6 p-4 bg-muted rounded-lg text-center">
				<p className="text-sm text-muted-foreground">Confirmation Number</p>
				<p className="text-lg font-mono font-semibold">{data.confirmationNumber}</p>
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

export default ConfirmationDetails;
