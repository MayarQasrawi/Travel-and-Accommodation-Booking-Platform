import { useQuery } from "@tanstack/react-query";
import type { Amenity } from "@/Pages/SearchResultsPage/hooks/useAmenities";
import axiosInstance from "@/services/axios";

export interface SearchParams {
	city?: string;
	checkInDate?: Date;
	checkOutDate?: Date;
	adults?: number;
	children?: number;
	numberOfRooms?: number;
}
export interface SearchResult {
	hotelId: number;
	hotelName: string;
	starRating: number;
	latitude: number;
	longitude: number;
	roomPrice: number;
	roomType: string;
	cityName: string;
	roomPhotoUrl: string;
	discount: number;
	amenities: Amenity;
	numberOfChildren: number;
	numberOfAdults: number;
	numberOfRooms: number;
	checkInDate: string;
	checkOutDate: string;
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
