import * as Yup from "yup";

const isCardPayment = (paymentMethod: unknown) => {
	const method = Array.isArray(paymentMethod) ? paymentMethod[0] : paymentMethod;
	return method === "credit_card" || method === "debit_card";
};

export const personalDetailsFormSchema = Yup.object().shape({
	firstName: Yup.string().trim().required("First name is required").min(2, "First name is too short"),
	lastName: Yup.string().trim().required("Last name is required").min(2, "Last name is too short"),
	email: Yup.string().trim().email("Invalid email address").required("Email is required"),
	phone: Yup.string()
		.trim()
		.required("Phone number is required")
		.matches(/^[0-9\-+()\s]*$/, "Invalid phone format"),
	specialRequests: Yup.string().trim(),
	paymentMethod: Yup.string()
		.oneOf(["credit_card", "debit_card", "paypal", "bank_transfer"])
		.required("Payment method is required"),
	cardNumber: Yup.string().when("paymentMethod", (paymentMethod, schema) => {
		return isCardPayment(paymentMethod)
			? schema.required("Card number is required").matches(/^\d{16}$/, "Card number must be 16 digits")
			: schema.notRequired();
	}),
	cardExpiry: Yup.string().when("paymentMethod", (paymentMethod, schema) => {
		return isCardPayment(paymentMethod)
			? schema.required("Expiry date is required").matches(/^\d{2}\/\d{2}$/, "Format must be MM/YY")
			: schema.notRequired();
	}),
	cardCVV: Yup.string().when("paymentMethod", (paymentMethod, schema) => {
		return isCardPayment(paymentMethod)
			? schema.required("CVV is required").matches(/^\d{3,4}$/, "CVV must be 3-4 digits")
			: schema.notRequired();
	}),
});
