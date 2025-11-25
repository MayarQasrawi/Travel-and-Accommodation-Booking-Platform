// useDeleteHotelMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hotelsApi } from "../api";

export function useDeleteHotelMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (hotelId: number) => hotelsApi.deleteHotel(hotelId),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["hotels"] });
		},
		onError: (error: Error) => {
			console.error("Error deleting hotel:", error);
		},
	});
}
