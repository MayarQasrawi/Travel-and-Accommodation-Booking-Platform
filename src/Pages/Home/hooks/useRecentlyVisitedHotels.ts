import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import axiosInstance from "@/services/axios";

export interface RecentlyVisitedHotel {
	hotelId: number;
	hotelName: string;
	starRating: number;
	visitDate: string;
	cityName: string;
	thumbnailUrl: string;
	priceLowerBound: number;
	priceUpperBound: number;
}

export function useRecentlyVisitedHotels() {
	const { user } = useAuth();

	return useQuery<RecentlyVisitedHotel[]>({
		queryKey: ["recentHotels", user?.userId],
		queryFn: async () => {
			try {
				const { data } = await axiosInstance.get<RecentlyVisitedHotel[]>(`home/users/${user?.userId}/recent-hotels`);
				return data;
			} catch (error) {
				console.error("Error fetching recently visited hotels:", error);
				throw error;
			}
		},
		enabled: !!user,
	});
}
