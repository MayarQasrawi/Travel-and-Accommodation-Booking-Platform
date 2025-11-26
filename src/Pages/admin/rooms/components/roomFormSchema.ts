import * as Yup from "yup";

export const roomFormSchema = Yup.object().shape({
	roomNumber: Yup.string()
		.required("Room number is required")
		.min(1, "Room number must be at least 1 character")
		.max(20, "Room number must not exceed 20 characters"),
	capacityOfAdults: Yup.number()
		.required("Adults capacity is required")
		.min(1, "Adults capacity must be at least 1")
		.max(20, "Adults capacity must not exceed 20")
		.integer("Adults capacity must be a whole number"),
	capacityOfchildren: Yup.number()
		.required("Children capacity is required")
		.min(0, "Children capacity must be at least 0")
		.max(20, "Children capacity must not exceed 20")
		.integer("Children capacity must be a whole number"),
	availability: Yup.boolean().required("Availability is required"),
});
