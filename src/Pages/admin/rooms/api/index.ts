import axiosInstance from "@/services/axios";
import type { CreateRoomData, Room, RoomsQueryParams, RoomType, UpdateRoomData } from "./types";

export const roomsApi = {
	getRooms: async (params?: RoomsQueryParams) => {
		const queryParams = new URLSearchParams();
		if (params?.search) {
			queryParams.append("searchQuery", params.search);
		}
		const response = await axiosInstance.get(`/rooms?${queryParams.toString()}`);
		return response.data;
	},

	createRoom: async (data: CreateRoomData) => {
		const response = await axiosInstance.post<Room>("/rooms", data);
		return response.data;
	},

	updateRoom: async (data: UpdateRoomData) => {
		const response = await axiosInstance.put<Room>(`/rooms/${data.roomId}`, data);
		return response.data;
	},

	deleteRoom: async (roomId: number) => {
		const response = await axiosInstance.delete<void>(`/rooms/${roomId}`);
		return response.data;
	},

	getRoomTypes: async () => {
		const response = await axiosInstance.get<RoomType[]>("/room-types");
		return response.data;
	},
};

export default roomsApi;
