import { useMutation, useQueryClient } from "@tanstack/react-query";
import { citiesApi } from "../api";

export const useDeleteCityMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: citiesApi.deleteCity,
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cities"] }),
		onError: (e: Error) => {
			console.error("Error deleting city:", e);
		},
	});
};
