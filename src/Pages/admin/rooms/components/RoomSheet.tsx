import type { FormikHelpers } from "formik";
import { FormSheet } from "@/components/admin/FormSheet";
import type { Room } from "../api/types";
import { useCreateRoomMutation } from "../hooks/useCreateRoomMutation";
import { useUpdateRoomMutation } from "../hooks/useUpdateRoomMutation";
import { RoomForm, type RoomFormValues } from "./RoomForm";

interface RoomFormSheetProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	room?: Room;
}

export function RoomFormSheet({ open, onOpenChange, room }: RoomFormSheetProps) {
	const createMutation = useCreateRoomMutation();
	const updateMutation = useUpdateRoomMutation();

	const handleSubmit = (values: RoomFormValues, helpers: FormikHelpers<RoomFormValues>) => {
		if (room) {
			updateMutation.mutate({ ...values, id: room.id });
		} else {
			createMutation.mutate(values);
		}
		onOpenChange(false);
		helpers.resetForm();
	};

	const defaultValues: RoomFormValues = {
		roomNumber: room?.roomNumber || 0,
		capacityOfAdults: room?.capacityOfAdults || 1,
		capacityOfChildren: room?.capacityOfChildren || 0,
		availability: room?.availability ?? true,
	};

	return (
		<FormSheet<RoomFormValues>
			open={open}
			onOpenChange={onOpenChange}
			title={room ? "Edit Room" : "Create New Room"}
			description={room ? "Update the room information below." : "Fill in the information to create a new room."}
			initialValues={defaultValues}
			onSubmit={handleSubmit}
			FormComponent={RoomForm}
		/>
	);
}
