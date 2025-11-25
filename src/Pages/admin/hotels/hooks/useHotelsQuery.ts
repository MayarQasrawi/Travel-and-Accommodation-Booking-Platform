import { useQuery } from "@tanstack/react-query";
import { hotelsApi } from "../api";
import type { HotelsQueryParams } from "../api/types";

export function useHotelsQuery(params?: HotelsQueryParams) {
	return useQuery({
		queryKey: ["hotels", params],
		queryFn: () => hotelsApi.getHotels(params),
	});
}
