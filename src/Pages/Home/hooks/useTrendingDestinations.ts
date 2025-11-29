import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios";

export interface TrendingDestination {
	cityId: number;
	cityName: string;
	countryName: string;
	description: string;
	thumbnailUrl: string;
	hotelId?: number;
}

export function useTrendingDestinations() {
	return useQuery<TrendingDestination[]>({
		queryKey: ["trendingDestinations"],
		queryFn: async () => {
			try {
				const { data } = await axiosInstance.get<TrendingDestination[]>("home/destinations/trending");
				return data;
			} catch (error) {
				console.error("Error fetching trending destinations:", error);
				throw error;
			}
		},
	});
}
