import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/services/axios";
import type { GalleryImage, HotelDetails, Review, Room } from "@/types/hotel";

export function useHotelDetails(hotelId: string) {
	return useQuery<HotelDetails>({
		queryKey: ["hotel", hotelId],
		queryFn: async () => {
			const { data } = await axiosInstance.get<HotelDetails>(`/hotels/${hotelId}`);
			return data;
		},
		enabled: !!hotelId,
	});
}

export function useHotelGallery(hotelId: string) {
	return useQuery<GalleryImage[]>({
		queryKey: ["hotel-gallery", hotelId],
		queryFn: async () => {
			const { data } = await axiosInstance.get<GalleryImage[]>(`/hotels/${hotelId}/gallery`);
			return data;
		},
		enabled: !!hotelId,
	});
}

export function useAvailableRooms(hotelId: string) {
	return useQuery<Room[]>({
		queryKey: ["hotel-rooms", hotelId],
		queryFn: async () => {
			const { data } = await axiosInstance.get<Room[]>(`/hotels/${hotelId}/available-rooms`);
			return data;
		},
		enabled: !!hotelId,
	});
}

export function useHotelReviews(hotelId: string) {
	return useQuery<Review[]>({
		queryKey: ["hotel-reviews", hotelId],
		queryFn: async () => {
			const { data } = await axiosInstance.get<Review[]>(`/hotels/${hotelId}/reviews`);
			return data;
		},
		enabled: !!hotelId,
	});
}
