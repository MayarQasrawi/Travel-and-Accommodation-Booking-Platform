import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hotelsApi } from "../api";
import type { UpdateHotelData } from "../api/types";

export function useUpdateHotelMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateHotelData) => hotelsApi.updateHotel(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["hotels"] });
		},
		onError: (error: Error) => {
			console.error("Error updating hotel:", error);
		},
	});
}
