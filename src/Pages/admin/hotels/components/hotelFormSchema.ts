import * as Yup from "yup";

export const hotelFormSchema = Yup.object().shape({
	hotelName: Yup.string()
		.required("Hotel name is required")
		.min(2, "Hotel name must be at least 2 characters")
		.max(100, "Hotel name must not exceed 100 characters"),
	// cityId: Yup.string().required("City is required"),
	location: Yup.string()
		.required("Location is required")
		.min(5, "Location must be at least 5 characters")
		.max(200, "Location must not exceed 200 characters"),
	starRating: Yup.number()
		.required("Star rating is required")
		.min(1, "Star rating must be at least 1")
		.max(5, "Star rating must not exceed 5")
		.integer("Star rating must be a whole number"),
});
