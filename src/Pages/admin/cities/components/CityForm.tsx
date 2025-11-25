import type { FormikHelpers } from "formik";
import { Formik } from "formik";
import FormFooter from "@/components/Form/FormFooter";
import FormikInput from "@/components/Form/FormikTextInput";
import type { City } from "../api/types";
import { cityFormSchema } from "./CityFormSchema";

export interface CityFormValues {
	name: string;
	description: string;
}

interface CityFormProps {
	initialValues?: Partial<City>;
	onSubmit: (values: CityFormValues, helpers: FormikHelpers<CityFormValues>) => void;
	onCancel: () => void;
}

export function CityForm({ initialValues, onSubmit, onCancel }: CityFormProps) {
	const defaultValues: CityFormValues = {
		name: initialValues?.name || "",
		description: initialValues?.description || "",
	};

	return (
		<Formik initialValues={defaultValues} validationSchema={cityFormSchema} onSubmit={onSubmit} enableReinitialize>
			{({ isSubmitting, handleSubmit }) => (
				<form className="space-y-6" onSubmit={handleSubmit}>
					<FormikInput label="City Name" name="name" placeholder="Enter city name" />

					<FormikInput label="description" name="description" placeholder="Enter description" />

					<FormFooter
						onCancel={onCancel}
						isSubmitting={isSubmitting}
						submitLabel={initialValues ? "Update City" : "Create City"}
					/>
				</form>
			)}
		</Formik>
	);
}
