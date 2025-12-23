import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios";

export interface FeaturedDeal {
	hotelId: number;
	originalRoomPrice: number;
	discount: number;
	finalPrice: number;
	cityName: string;
	hotelName: string;
	hotelStarRating: number;
	title: string;
	description: string;
	roomPhotoUrl: string;
}

export function useFeaturedDeals() {
	return useQuery<FeaturedDeal[]>({
		queryKey: ["featuredDeals"],
		queryFn: async () => {
			try {
				const { data } = await axiosInstance.get<FeaturedDeal[]>("/home/featured-deals");
				return data;
			} catch (error) {
				console.error("Error fetching featured deals:", error);
				throw error;
			}
		},
	});
}
