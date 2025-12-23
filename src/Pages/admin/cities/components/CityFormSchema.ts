import * as Yup from "yup";

export const cityFormSchema = Yup.object().shape({
	name: Yup.string()
		.required("City name is required")
		.min(2, "City name must be at least 2 characters")
		.max(100, "City name must not exceed 100 characters"),

	description: Yup.string()
		.required("Description is required")
		.min(2, "Country must be at least 2 characters")
		.max(100, "Country must not exceed 100 characters"),
});
