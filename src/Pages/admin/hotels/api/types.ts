export interface HotelsQueryParams {
	name?: string;
	city?: string;
}

export interface CreateHotelData {
	hotelName: string;
	// cityId: string;
	location: string;
	starRating: number;
}

export interface UpdateHotelData extends CreateHotelData {
	id: number;
}

export interface Room {
	id: number;
	name: string;
	type: string;
	price: number;
	available: boolean;
	maxOccupancy: number;
}

export interface Amenity {
	id: number;
	name: string;
	description: string;
}

export interface Hotel {
	id: number;
	hotelName: string;
	name?: string;
	location: string;
	description: string;
	hotelType: string;
	starRating: number;
	latitude: number;
	longitude: number;
	rooms?: Room[];
	imageUrl?: string;
	availableRooms?: number;
	cityId?: number;
	amenities?: Amenity[];
}
