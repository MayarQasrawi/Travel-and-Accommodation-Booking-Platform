import { Formik, type FormikHelpers } from "formik";
import FormFooter from "@/components/Form/FormFooter";
import FormikInput from "@/components/Form/FormikTextInput";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { roomFormSchema } from "./roomFormSchema";

export interface RoomFormValues {
	roomNumber: number;
	capacityOfAdults: number;
	capacityOfChildren: number;
	availability: boolean;
	price: number;
}

interface RoomFormProps {
	initialValues?: RoomFormValues;
	onSubmit: (values: RoomFormValues, helpers: FormikHelpers<RoomFormValues>) => void;
	onCancel: () => void;
}

export function RoomForm({ initialValues, onSubmit, onCancel }: RoomFormProps) {
	const defaultValues: RoomFormValues = {
		roomNumber: initialValues?.roomNumber || 0,
		capacityOfAdults: initialValues?.capacityOfAdults || 1,
		capacityOfChildren: initialValues?.capacityOfChildren || 0,
		availability: initialValues?.availability ?? true,
		price: initialValues?.price || 0,
	};

	const fields = [
		{
			label: "Room Number",
			name: "roomNumber",
			placeholder: "Enter room number",
			type: "text",
		},
		{
			label: "Adults Capacity",
			name: "capacityOfAdults",
			placeholder: "Enter number of adults",
			type: "number",
			min: 1,
			max: 20,
		},
		{
			label: "Children Capacity",
			name: "capacityOfChildren",
			placeholder: "Enter number of children",
			type: "number",
			min: 0,
			max: 20,
		},
	];

	return (
		<Formik initialValues={defaultValues} validationSchema={roomFormSchema} onSubmit={onSubmit} enableReinitialize>
			{({ isSubmitting, handleSubmit, values, setFieldValue }) => (
				<form className="space-y-6" onSubmit={handleSubmit}>
					{fields.map((field) => {
						const { min, max, ...inputProps } = field;
						return <FormikInput key={field.name} {...inputProps} min={min} max={max} />;
					})}

					<div className="flex items-center space-x-2">
						<Checkbox
							id="availability"
							checked={values.availability}
							onCheckedChange={(checked) => setFieldValue("availability", checked)}
						/>
						<Label htmlFor="availability" className="text-sm font-medium">
							Available
						</Label>
					</div>

					<FormFooter
						onCancel={onCancel}
						isSubmitting={isSubmitting}
						submitLabel={initialValues?.roomNumber ? "Update Room" : "Create Room"}
					/>
				</form>
			)}
		</Formik>
	);
}
