import axios from "axios";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export const setAuthHeader = (token: string | null) => {
	if (token) axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
	else delete axiosInstance.defaults.headers.common.Authorization;
};

export type ApiError = {
	message: string;
	code: number;
	details?: unknown;
};

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		const apiError: ApiError = {
			message: error.response?.data?.message || error.message || "Something went wrong",
			code: error.response?.status || 0,
			details: error.response?.data,
		};
		return Promise.reject(apiError);
	},
);

export default axiosInstance;
