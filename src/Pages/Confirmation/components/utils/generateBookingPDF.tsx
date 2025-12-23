import jsPDF from "jspdf";

interface BookingData {
	confirmationNumber: string;
	customerName: string;
	hotelName: string;
	roomType: string;
	roomNumber: string;
	bookingDateTime: string;
	paymentMethod: string;
	bookingStatus: string;
	totalCost: number;
}

export function generateBookingPDF(data: BookingData): void {
	// Create new PDF document
	const doc = new jsPDF({
		orientation: "portrait",
		unit: "mm",
		format: "a4",
	});

	const pageWidth = doc.internal.pageSize.getWidth();
	const margin = 20;
	let yPosition = 20;

	// Helper function to add text
	const addText = (
		text: string,
		x: number,
		y: number,
		options?: { fontSize?: number; fontStyle?: string; align?: "left" | "center" | "right" },
	) => {
		if (options?.fontSize) doc.setFontSize(options.fontSize);
		if (options?.fontStyle) doc.setFont("helvetica", options.fontStyle);

		if (options?.align === "center") {
			x = pageWidth / 2;
		}

		doc.text(text, x, y, { align: options?.align || "left" });
	};

	// Title
	doc.setFontSize(24);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(26, 86, 219); // Blue color
	addText("Booking Confirmation", 0, yPosition, { align: "center" });
	yPosition += 15;

	// Confirmation Number Box
	doc.setFillColor(240, 253, 244); // Light green background
	doc.setDrawColor(16, 185, 129); // Green border
	doc.setLineWidth(0.5);
	doc.roundedRect(margin, yPosition, pageWidth - 2 * margin, 15, 3, 3, "FD");

	doc.setFontSize(12);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(4, 120, 87); // Green text
	addText(`Confirmation Number: ${data.confirmationNumber}`, pageWidth / 2, yPosition + 10, { align: "center" });
	yPosition += 25;

	// Booking Details Section
	doc.setFontSize(14);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(55, 65, 81); // Dark gray
	addText("Booking Details", margin, yPosition);
	yPosition += 10;

	// Details
	const details = [
		{ label: "Customer:", value: data.customerName },
		{ label: "Hotel:", value: data.hotelName },
		{ label: "Room:", value: `${data.roomType} (Room ${data.roomNumber})` },
		{ label: "Booking Date:", value: data.bookingDateTime },
		{ label: "Payment Method:", value: data.paymentMethod },
		{ label: "Status:", value: data.bookingStatus },
	];

	doc.setFontSize(11);
	details.forEach((detail) => {
		// Label
		doc.setFont("helvetica", "bold");
		doc.setTextColor(107, 114, 128); // Gray
		addText(detail.label, margin, yPosition);

		// Value
		doc.setFont("helvetica", "normal");
		doc.setTextColor(17, 24, 39); // Dark
		addText(detail.value, margin + 50, yPosition);

		// Divider line
		if (detail !== details[details.length - 1]) {
			doc.setDrawColor(229, 231, 235);
			doc.setLineWidth(0.1);
			doc.line(margin, yPosition + 2, pageWidth - margin, yPosition + 2);
		}

		yPosition += 8;
	});

	yPosition += 10;

	// Payment Summary Section
	doc.setFontSize(14);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(55, 65, 81);
	addText("Payment Summary", margin, yPosition);
	yPosition += 10;

	// Total Cost Box
	doc.setFillColor(249, 250, 251); // Light gray background
	doc.setDrawColor(209, 213, 219); // Gray border
	doc.setLineWidth(0.3);
	doc.rect(margin, yPosition, pageWidth - 2 * margin, 15, "FD");

	doc.setFontSize(14);
	doc.setFont("helvetica", "bold");
	doc.setTextColor(4, 120, 87); // Green
	addText("Total Cost:", margin + 5, yPosition + 10);
	addText(`$${data.totalCost.toFixed(2)}`, margin + 50, yPosition + 10);

	yPosition += 25;

	// Footer
	doc.setFontSize(9);
	doc.setFont("helvetica", "normal");
	doc.setTextColor(107, 114, 128);

	const footerLines = [
		"Please keep this confirmation for your records.",
		"For any questions or modifications, please contact our support team",
		"with your confirmation number.",
	];

	footerLines.forEach((line) => {
		addText(line, 0, yPosition, { align: "center" });
		yPosition += 5;
	});

	// Save the PDF
	doc.save(`booking-${data.confirmationNumber}.pdf`);
}
