export interface RoomAmenity {
	id: number;
	name: string;
	description: string;
}

export type RoomType =
	| "Deluxe Suite"
	| "Standard Room"
	| "Executive Suite"
	| "Family Room"
	| "Luxury Suite"
	| "Presidential Suite"
	| "Deluxe Room"
	| "Twin Room"
	| "Penthouse Suite";

export interface Room {
	roomId: number;
	roomNumber: number;
	roomPhotoUrl: string;
	roomType: RoomType;
	capacityOfAdults: number;
	capacityOfChildren: number;
	amenities: RoomAmenity[];
	price: number;
	availability: boolean;
}

export interface CreateRoomData {
	roomNumber: number;
	roomPhotoUrl: string;
	roomType: RoomType;
	capacityOfAdults: number;
	capacityOfChildren: number;
	amenities?: RoomAmenity[];
	price: number;
	availability: boolean;
	hotelId?: number;
}

export interface UpdateRoomData extends Partial<CreateRoomData> {
	roomId: number;
}

export interface RoomCapacity {
	adults: number;
	children: number;
	total: number;
}
