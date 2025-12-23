import FormError from "@/components/Form/FormError";
import FormikInput from "@/components/Form/FormikTextInput";
import FormSection from "@/components/Form/FormSection";
import { Label } from "@/components/ui/label";
import { cardDetailsFields, paymentMethodOptions } from "../personalDetailsForm.config";

interface PaymentStepProps {
	paymentMethod: string;
	getFieldProps: (name: string) => any;
	setFieldValue: (field: string, value: any) => void;
	touched: any;
	errors: any;
}

export function PaymentStep({ paymentMethod, getFieldProps, setFieldValue, touched, errors }: PaymentStepProps) {
	const showCardFields = paymentMethod === "credit_card" || paymentMethod === "debit_card";

	return (
		<FormSection title="Payment Details" contentClassName="space-y-4">
			<div>
				<Label htmlFor="paymentMethod">Select Payment Method *</Label>
				<select
					id="paymentMethod"
					{...getFieldProps("paymentMethod")}
					onChange={(e) => setFieldValue("paymentMethod", e.target.value)}
					className="w-full px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 mt-2"
				>
					{paymentMethodOptions.map(({ value, label }) => (
						<option key={value} value={value}>
							{label}
						</option>
					))}
				</select>
				{touched.paymentMethod && errors.paymentMethod && <FormError message={errors.paymentMethod} />}
			</div>

			{showCardFields && (
				<div className="space-y-4 border-t pt-4 mt-4">
					<FormikInput label="Card Number *" name="cardNumber" placeholder="1234 5678 9012 3456" />
					<div className="grid grid-cols-2 gap-4">
						{cardDetailsFields.map(({ label, name, placeholder }) => (
							<FormikInput key={name} label={label} name={name} placeholder={placeholder} />
						))}
					</div>
				</div>
			)}
		</FormSection>
	);
}
