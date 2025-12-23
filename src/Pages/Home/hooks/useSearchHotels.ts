import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios";
import type { Hotel } from "@/types/hotel";

export interface SearchParams {
	city?: string;
	checkInDate?: Date;
	checkOutDate?: Date;
	adults?: number;
	children?: number;
	numberOfRooms?: number;
}
export interface SearchResult {
	hotels: Hotel[];
}

export function useSearchHotels(params: SearchParams) {
	return useQuery({
		queryKey: ["searchHotels", params],
		queryFn: async () => {
			const { data } = await axiosInstance.get<SearchResult>("/home/search", {
				params,
			});
			console.info("Search Hotels:", data);
			return data.hotels;
		},
		// enabled: false,
	});
}
