import { useQuery } from "@tanstack/react-query";
import { citiesApi } from "../api";
import type { CitiesQueryParams } from "../api/types";

export function useCitiesQuery(params?: CitiesQueryParams) {
	return useQuery({
		queryKey: ["cities", params],
		queryFn: () => citiesApi.getCities(params),
	});
}
