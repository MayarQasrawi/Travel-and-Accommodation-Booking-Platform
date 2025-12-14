import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios";

export interface Amenity {
	id: number;
	name: string;
	description: string;
}

export function useAmenities() {
	return useQuery<Amenity[]>({
		queryKey: ["amenities"],
		queryFn: async () => {
			try {
				const { data } = await axiosInstance.get<Amenity[]>("search-results/amenities");
				return data;
			} catch (error) {
				console.error("Error fetching amenities:", error);
				throw error;
			}
		},
	});
}
