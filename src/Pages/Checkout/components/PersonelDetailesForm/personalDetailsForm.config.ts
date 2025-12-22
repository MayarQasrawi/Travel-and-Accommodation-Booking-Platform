export const personalInfoFields = [
	{
		label: "First Name",
		name: "firstName",
		placeholder: "Your first name",
	},
	{
		label: "Last Name",
		name: "lastName",
		placeholder: "Your last name",
	},
	{
		label: "Email Address",
		name: "email",
		type: "email",
		placeholder: "you@example.com",
	},
	{
		label: "Phone",
		name: "phone",
		placeholder: "e.g. +44 7700 900123",
	},
] as const;

export const paymentMethodOptions = [
	{ value: "credit_card", label: "Credit Card" },
	{ value: "debit_card", label: "Debit Card" },
	{ value: "paypal", label: "PayPal" },
	{ value: "bank_transfer", label: "Bank Transfer" },
] as const;

export const cardDetailsFields = [
	{
		label: "Expiry Date (MM/YY) *",
		name: "cardExpiry",
		placeholder: "MM/YY",
	},
	{
		label: "CVV *",
		name: "cardCVV",
		placeholder: "123",
	},
] as const;
