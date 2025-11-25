// useCreateHotelMutation.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { hotelsApi } from "../api";
import type { CreateHotelData } from "../api/types";

export function useCreateHotelMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateHotelData) => hotelsApi.createHotel(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["hotels"] });
		},
		onError: (error: Error) => {
			console.error("Error creating hotel:", error);
		},
	});
}
