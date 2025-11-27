import { useMutation, useQueryClient } from "@tanstack/react-query";

import { citiesApi } from "../api";
import type { CreateCityData } from "../api/types";

export function useCreateCityMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (data: CreateCityData) => citiesApi.createCity(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["cities"] });
		},
		onError: (error: Error) => {
			console.error("Error creating city:", error);
		},
	});
}
