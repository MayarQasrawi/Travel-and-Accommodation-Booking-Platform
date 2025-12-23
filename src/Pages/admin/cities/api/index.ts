import axiosInstance from "@/services/axios";
import type { City, CreateCityData, UpdateCityData } from "./types";

export const citiesApi = {
	getCities: async (params?: { search?: string }) => {
		const queryParams = new URLSearchParams();
		if (params?.search) {
			queryParams.append("searchQuery", params.search);
		}
		const response = await axiosInstance.get(`/cities?${queryParams.toString()}`);
		return response.data;
	},

	createCity: async (data: CreateCityData) => {
		const response = await axiosInstance.post<City>("/cities", data);
		return response.data;
	},

	updateCity: async (data: UpdateCityData) => {
		const response = await axiosInstance.put<City>(`/cities/${data.id}`, data);
		return response.data;
	},

	deleteCity: async (cityId: number) => {
		const response = await axiosInstance.delete<void>(`/cities/${cityId}`);
		return response.data;
	},
};

export default citiesApi;
