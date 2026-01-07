import type { FormikHelpers } from "formik";
import { FormSheet } from "@/components/admin/FormSheet";
import type { Hotel } from "../api/types";
import { useCreateHotelMutation } from "../hooks/useCreateHotelMutation";
import { useUpdateHotelMutation } from "../hooks/useUpdateHotelMutation";
import { HotelForm, type HotelFormValues } from "./HotelForm";

interface HotelFormSheetProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	hotel?: Hotel;
}

export function HotelFormSheet({ open, onOpenChange, hotel }: HotelFormSheetProps) {
	const createMutation = useCreateHotelMutation();
	const updateMutation = useUpdateHotelMutation();

	const handleSubmit = (values: HotelFormValues, helpers: FormikHelpers<HotelFormValues>) => {
		if (hotel) {
			updateMutation.mutate({ ...values, id: hotel.id });
		} else {
			createMutation.mutate(values);
		}
		onOpenChange(false);
		helpers.resetForm();
	};

	const defaultValues: HotelFormValues = {
		hotelName: hotel?.hotelName || "",
		location: hotel?.location || "",
		starRating: hotel?.starRating || 3,
	};

	return (
		<FormSheet<HotelFormValues>
			open={open}
			onOpenChange={onOpenChange}
			title={hotel ? "Edit Hotel" : "Create New Hotel"}
			description={hotel ? "Update the hotel information below." : "Fill in the information to create a new hotel."}
			initialValues={defaultValues}
			onSubmit={handleSubmit}
			FormComponent={HotelForm}
		/>
	);
}
