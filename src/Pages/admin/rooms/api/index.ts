import axiosInstance from "@/services/axios";
import type { CreateRoomData, Room, RoomType, UpdateRoomData } from "./types";

export const roomsApi = {
	getRooms: (params?: string) => {
		return axiosInstance.get<Room[]>(`/rooms${params ? `?${params}` : ""}`);
	},

	createRoom: (data: CreateRoomData) => {
		return axiosInstance.post<Room>("/rooms", data);
	},

	updateRoom: (data: UpdateRoomData) => {
		return axiosInstance.put<Room>(`/rooms/${data.roomId}`, data);
	},

	deleteRoom: (roomId: number) => {
		return axiosInstance.delete<void>(`/rooms/${roomId}`);
	},

	getRoomTypes: () => {
		return axiosInstance.get<RoomType[]>("/room-types");
	},
};

export default roomsApi;
