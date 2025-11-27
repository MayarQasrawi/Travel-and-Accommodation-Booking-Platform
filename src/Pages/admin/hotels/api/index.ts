import axiosInstance from "@/services/axios";
import type { CreateHotelData, Hotel, HotelsQueryParams, UpdateHotelData } from "./types";

export const hotelsApi = {
	getHotels: async (params?: HotelsQueryParams) => {
		const queryParams = new URLSearchParams();
		if (params?.search) queryParams.append("searchQuery", params.search);

		const queryString = queryParams.toString();
		const response = await axiosInstance.get<Hotel[]>(`/hotels${queryString ? `?${queryString}` : ""}`);
		return response.data;
	},

	createHotel: async (data: CreateHotelData) => {
		const response = await axiosInstance.post<Hotel>("/hotels", data);
		return response.data;
	},

	updateHotel: async (data: UpdateHotelData) => {
		const response = await axiosInstance.put<Hotel>(`/hotels/${data.id}`, data);
		return response.data;
	},

	deleteHotel: async (hotelId: number) => {
		const response = await axiosInstance.delete<void>(`/hotels/${hotelId}`);
		return response.data;
	},
};

export default hotelsApi;
