import { useMutation, useQueryClient } from "@tanstack/react-query";
import { roomsApi } from "../api";
import type { CreateRoomData } from "../api/types";

export function useCreateRoomMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateRoomData) => roomsApi.createRoom(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["rooms"] });
		},
		onError: (error: Error) => {
			console.error("Error creating room:", error);
		},
	});
}
