import { useMutation, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "../api";
import type { UpdateRoomData } from "../api/types";

export function useUpdateRoomMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateRoomData) => roomsApi.updateRoom(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms"] });
		},
		onError: (error: Error) => {
			console.error("Error updating room:", error);
		},
	});
}
