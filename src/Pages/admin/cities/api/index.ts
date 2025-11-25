import axiosInstance from "@/services/axios";
import type { CitiesQueryParams, City, CreateCityData, UpdateCityData } from "./types";

export const citiesApi = {
	getCities: (params?: CitiesQueryParams) => {
		const queryParams = new URLSearchParams();
		if (params?.name) queryParams.append("name", params.name);
		if (params?.country) queryParams.append("country", params.country);

		const queryString = queryParams.toString();
		return axiosInstance.get<City[]>(`/cities${queryString ? `?${queryString}` : ""}`);
	},

	createCity: (data: CreateCityData) => {
		return axiosInstance.post<City>("/cities", data);
	},

	updateCity: (data: UpdateCityData) => {
		return axiosInstance.put<City>(`/cities/${data.id}`, data);
	},

	deleteCity: (cityId: string) => {
		return axiosInstance.delete<void>(`/cities/${cityId}`);
	},
};

export default citiesApi;
