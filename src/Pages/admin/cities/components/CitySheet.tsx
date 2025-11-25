import type { FormikHelpers } from "formik";
import { FormSheet } from "@/components/admin/FormSheet";
import type { City } from "../api/types";
import { useCreateCityMutation } from "../hooks/useCreateCityMutation";
import { useUpdateCityMutation } from "../hooks/useUpdateCityMutation";
import { CityForm, type CityFormValues } from "./CityForm";

interface CityFormSheetProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	city?: City;
}

export function CityFormSheet({ open, onOpenChange, city }: CityFormSheetProps) {
	const createMutation = useCreateCityMutation();
	const updateMutation = useUpdateCityMutation();

	const handleSubmit = async (values: CityFormValues, helpers: FormikHelpers<CityFormValues>) => {
		if (city) {
			updateMutation.mutate({ ...values, id: city.id });
		} else {
			createMutation.mutate(values);
		}
		onOpenChange(false);
		helpers.resetForm();
	};

	return (
		<FormSheet<CityFormValues>
			open={open}
			onOpenChange={onOpenChange}
			title={city ? "Edit City" : "Create New City"}
			description={city ? "Update the city information below." : "Fill in the information to create a new city."}
			initialValues={city ?? { name: "", description: "" }}
			onSubmit={handleSubmit}
			FormComponent={CityForm}
		/>
	);
}
