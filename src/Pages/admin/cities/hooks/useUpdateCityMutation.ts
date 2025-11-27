import { useMutation, useQueryClient } from "@tanstack/react-query";
import { citiesApi } from "../api";
import type { UpdateCityData } from "../api/types";

export function useUpdateCityMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: UpdateCityData) => citiesApi.updateCity(data),

		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cities"] });
		},

		onError: (error: Error) => {
			console.error("Error updating city:", error);
		},
	});
}
