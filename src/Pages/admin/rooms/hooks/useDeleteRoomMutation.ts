import { useMutation, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "../api";

export function useDeleteRoomMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (roomId: number | undefined) => roomsApi.deleteRoom(roomId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms"] });
		},
		onError: (error: Error) => {
			console.error("Error deleting room:", error);
		},
	});
}
