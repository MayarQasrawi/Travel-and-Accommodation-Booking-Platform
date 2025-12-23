export interface CardDetails {
	cardNumber: string;
	cardExpiry: string;
	cardCVV: string;
}

export interface RoomDetails {
	roomId: string;
	roomType: string;
	price: number;
	checkInDate: string;
	checkOutDate: string;
}

export interface HotelDetails {
	// hotelId: string;
	hotelName: string;
	city: string;
}

export interface CreateBookingData {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	specialRequests?: string;

	paymentMethod: "credit_card" | "debit_card" | "paypal" | "bank_transfer";
	cardDetails?: CardDetails | null;

	hotel: HotelDetails;
	room: RoomDetails;
}

export interface BookingConfirmation {
	customerName: string;
	hotelName: string;
	roomNumber: string;
	roomType: string;
	bookingDateTime: string;
	totalCost: number;
	paymentMethod: string;
	bookingStatus: "Confirmed" | "Pending" | "Cancelled";
	confirmationNumber: string;
}
