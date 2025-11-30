import { useQuery } from "@tanstack/react-query";
import { da } from "date-fns/locale";
import axiosInstance from "@/services/axios";

export interface SearchParams {
	city?: string;
	checkInDate?: string;
	checkOutDate?: string;
	adults?: number;
	children?: number;
	numberOfRooms?: number;
}
export interface SearchResult {
	hotelId: number;
	cityName: string;
	hotelName: string;
	hotelStarRating: number;
	originalRoomPrice: number;
	finalPrice: number;
	discount: number;
	numberOfAdults: number;
	numberOfChildren: number;
	numberOfRooms: number;
	roomPhotoUrl: string;
}

export function useSearchHotels(params: SearchParams) {
	return useQuery<SearchResult[]>({
		queryKey: ["searchHotels", params],
		queryFn: async () => {
			const { data } = await axiosInstance.get<SearchResult[]>("/home/search", {
				params,
			});
			console.info("Search Hotels:", data);
			return data;
		},
		// enabled: false,
	});
}
