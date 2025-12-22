import type { FormikHelpers } from "formik";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "@/constants/routes";
import { useCartStore } from "@/store/cartStore";
import type { CreateBookingData } from "../../api/types";
import { useCreateBookingMutation } from "../../hooks/useCreateBookingMutation";
import { FormNavigation } from "./components/FormNavigation";
import { PaymentStep } from "./components/PaymentStep";
import { PersonalInfoStep } from "./components/PersonalInfoStep";
import { SpecialRequestsStep } from "./components/SpecialRequestsStep";
import { StepIndicator } from "./components/StepIndicator";
import { personalDetailsFormSchema } from "./PersonalDetailsFormSchema";

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

const TOTAL_STEPS = 3;

export function PersonalDetailsForm() {
	const [step, setStep] = useState(1);
	const navigate = useNavigate();
	const { cartItems, removeFromCart, selectedIndex } = useCartStore();
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

		const bookingData = bookingDataArray.find((item) => item.room.roomId === selectedIndex?.toString());

		createBooking(bookingData!, {
			onSuccess: (response) => {
				removeFromCart(selectedIndex!);
				navigate(`${ROUTES.USER.CONFIRMATION}?bookingId=${response.confirmationNumber}`);
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
			{({ handleSubmit, isSubmitting, values, setFieldValue, getFieldProps, touched, errors, submitForm }) => (
				<form onSubmit={handleSubmit} className="rounded border-2 p-6 space-y-6">
					<StepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

					{step === 1 && <PersonalInfoStep />}

					{step === 2 && (
						<PaymentStep
							paymentMethod={values.paymentMethod}
							getFieldProps={getFieldProps}
							setFieldValue={setFieldValue}
							touched={touched}
							errors={errors}
						/>
					)}

					{step === 3 && (
						<SpecialRequestsStep
							value={values.specialRequests}
							onChange={(value) => setFieldValue("specialRequests", value)}
						/>
					)}

					<FormNavigation
						currentStep={step}
						totalSteps={TOTAL_STEPS}
						isSubmitting={isSubmitting || isPending}
						onNext={() => setStep(step + 1)}
						onBack={() => setStep(step - 1)}
						onCancel={() => window.history.back()}
						onSubmit={submitForm}
					/>
				</form>
			)}
		</Formik>
	);
}

export default PersonalDetailsForm;
