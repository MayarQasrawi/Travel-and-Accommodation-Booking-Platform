import type { FormikHelpers } from "formik";
import { Formik } from "formik";
import { useNavigate } from "react-router";
import FormError from "@/components/Form/FormError";
import FormFooter from "@/components/Form/FormFooter";
import FormikInput from "@/components/Form/FormikTextInput";
import FormSection from "@/components/Form/FormSection";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ROUTES } from "@/constants/routes";
import { useCartStore } from "@/store/cartStore";
import type { CreateBookingData } from "../../api/types";
import { useCreateBookingMutation } from "../../hooks/useCreateBookingMutation";
import { personalDetailsFormSchema } from "./PersonalDetailsFormSchema";
import { cardDetailsFields, paymentMethodOptions, personalInfoFields } from "./personalDetailsForm.config";

interface PersonalDetailsFormValues {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	specialRequests: string;
	paymentMethod: "credit_card" | "debit_card" | "paypal" | "bank_transfer";
	cardNumber: string;
	cardExpiry: string;
	cardCVV: string;
}

const INITIAL_VALUES: PersonalDetailsFormValues = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	specialRequests: "",
	paymentMethod: "credit_card",
	cardNumber: "",
	cardExpiry: "",
	cardCVV: "",
};

export function PersonalDetailsForm() {
	const navigate = useNavigate();
	const { cartItems } = useCartStore();
	const { mutate: createBooking, isPending } = useCreateBookingMutation();

	const handleSubmit = async (
		personalDetails: PersonalDetailsFormValues,
		{ setSubmitting }: FormikHelpers<PersonalDetailsFormValues>,
	) => {
		if (!cartItems.length) {
			console.error("Cart is empty");
			setSubmitting(false);
			return;
		}

		const bookingDataArray: CreateBookingData[] = cartItems.map((item) => ({
			firstName: personalDetails.firstName,
			lastName: personalDetails.lastName,
			email: personalDetails.email,
			phone: personalDetails.phone,
			specialRequests: personalDetails.specialRequests,
			paymentMethod: personalDetails.paymentMethod,
			cardDetails:
				personalDetails.paymentMethod === "credit_card" || personalDetails.paymentMethod === "debit_card"
					? {
							cardNumber: personalDetails.cardNumber || "",
							cardExpiry: personalDetails.cardExpiry || "",
							cardCVV: personalDetails.cardCVV || "",
						}
					: null,
			hotel: {
				hotelName: item.hotel.hotelName,
				city: item.hotel.cityName || "",
			},
			room: {
				roomId: item.room.roomId.toString(),
				roomType: item.room.roomType,
				price: item.room.price,
				checkInDate: item.checkInDate.split("T")[0],
				checkOutDate: item.checkOutDate.split("T")[0],
			},
		}));

		// For now, submit the first booking. In a real app, you might want to handle multiple bookings
		const bookingData = bookingDataArray[0];

		console.log("Submitting booking data:", bookingData);

		createBooking(bookingData, {
			onSuccess: (response) => {
				console.log("Booking successful:", response);

				navigate(`${ROUTES.USER.CONFIRMATION}?bookingId=${response.id}`);
				setSubmitting(false);
			},
			onError: (error) => {
				console.error("Booking failed:", error);
				setSubmitting(false);
			},
		});
	};

	return (
		<Formik initialValues={INITIAL_VALUES} validationSchema={personalDetailsFormSchema} onSubmit={handleSubmit}>
			{({ handleSubmit, isSubmitting, values, setFieldValue, getFieldProps, touched, errors }) => {
				const showCardFields = values.paymentMethod === "credit_card" || values.paymentMethod === "debit_card";

				return (
					<form onSubmit={handleSubmit} className=" rounded border-2 p-6 space-y-6">
						<FormSection title="Personal Information" contentClassName="grid grid-cols-1 md:grid-cols-2 gap-4">
							{personalInfoFields.map(({ label, name, placeholder }) => (
								<FormikInput key={name} label={label} name={name} placeholder={placeholder} />
							))}
						</FormSection>

						<FormSection title="Special Requests">
							<Label htmlFor="specialRequests">Any additional requests?</Label>
							<Textarea
								id="specialRequests"
								value={values.specialRequests || ""}
								onChange={(e) => setFieldValue("specialRequests", e.target.value)}
								placeholder="For example: late check-in, high floor preference"
								rows={4}
								className="border-2"
							/>
						</FormSection>

						<FormSection title="Payment Details" contentClassName="space-y-4">
							<Label htmlFor="paymentMethod">Select Payment Method *</Label>
							<select
								id="paymentMethod"
								{...getFieldProps("paymentMethod")}
								onChange={(e) => setFieldValue("paymentMethod", e.target.value)}
								className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2"
							>
								{paymentMethodOptions.map(({ value, label }) => (
									<option key={value} value={value}>
										{label}
									</option>
								))}
							</select>
							{touched.paymentMethod && errors.paymentMethod && <FormError message={errors.paymentMethod} />}
							{showCardFields && (
								<div className="space-y-4 border-t pt-4">
									<FormikInput label="Card Number *" name="cardNumber" placeholder="1234 5678 9012 3456" />
									<div className="grid grid-cols-2 gap-4">
										{cardDetailsFields.map(({ label, name, placeholder }) => (
											<FormikInput key={name} label={label} name={name} placeholder={placeholder} />
										))}
									</div>
								</div>
							)}
						</FormSection>
						<FormFooter
							onCancel={() => window.history.back()}
							isSubmitting={isSubmitting || isPending}
							submitLabel="Proceed to Confirmation"
						/>
					</form>
				);
			}}
		</Formik>
	);
}

export default PersonalDetailsForm;
