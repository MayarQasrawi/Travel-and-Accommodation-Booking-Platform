import { useQuery } from "@tanstack/react-query";
import { roomsApi } from "../api";
import type { RoomsQueryParams } from "../api/types";

export function useRoomsQuery(params?: RoomsQueryParams) {
	return useQuery({
		queryKey: ["rooms", params],
		queryFn: () => roomsApi.getRooms(params),
	});
}
