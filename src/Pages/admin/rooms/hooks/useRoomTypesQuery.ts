import { useQuery } from "@tanstack/react-query";
import { roomsApi } from "../api";

export function useRoomTypesQuery() {
	return useQuery({
		queryKey: ["room-types"],
		queryFn: () => roomsApi.getRoomTypes(),
	});
}
