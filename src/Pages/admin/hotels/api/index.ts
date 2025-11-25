import axiosInstance from "@/services/axios";
import type { CreateHotelData, Hotel, HotelsQueryParams, UpdateHotelData } from "./types";

export const hotelsApi = {
	getHotels: (params?: HotelsQueryParams) => {
		const queryParams = new URLSearchParams();
		if (params?.name) queryParams.append("name", params.name);
		if (params?.city) queryParams.append("city", params.city);

		const queryString = queryParams.toString();
		return axiosInstance.get<Hotel[]>(`/hotels${queryString ? `?${queryString}` : ""}`);
	},

	createHotel: (data: CreateHotelData) => {
		return axiosInstance.post<Hotel>("/hotels", data);
	},

	updateHotel: (data: UpdateHotelData) => {
		return axiosInstance.put<Hotel>(`/hotels/${data.id}`, data);
	},

	deleteHotel: (hotelId: number) => {
		return axiosInstance.delete<void>(`/hotels/${hotelId}`);
	},
};

export default hotelsApi;
