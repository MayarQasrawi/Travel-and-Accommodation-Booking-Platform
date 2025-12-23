export interface Hotel {
	hotelId: number;
	hotelName: string;
	starRating: number;
	latitude: number;
	longitude: number;
	roomPrice: number;
	roomType: string;
	cityName: string;
	roomPhotoUrl: string;
	localizedName: string;
	hotelDescription?: string;
}

export interface HotelDetails {
	hotelId: number;
	hotelName: string;
	location: string;
	description: string;
	latitude: number;
	longitude: number;
	amenities: Amenity[];
	starRating: number;
	availableRooms: number;
	imageUrl: string;
	cityId: number;
}

export interface Amenity {
	id: number;
	name: string;
	description: string;
}

export interface Review {
	reviewId: number;
	customerName: string;
	rating: number;
	description: string;
}

export interface Room {
	roomId: number;
	roomNumber: string;
	roomPhotoUrl: string;
	roomType: string;
	capacityOfAdults: number;
	capacityOfChildren: number;
	roomAmenities: RoomAmenity[];
	price: number;
	availability: boolean;
}

export interface RoomAmenity {
	name: string;
	description: string;
}

export interface GalleryImage {
	id: number;
	url: string;
}

export interface SearchResult {
	hotelId: number;
	hotelName: string;
	roomPrice: number;
	discount?: number;
	roomPhotoUrl: string;
	cityName: string;
	starRating: number;
	roomType: string;
	numberOfAdults: number;
	numberOfChildren: number;
	numberOfRooms: number;
	checkInDate: string;
	checkOutDate: string;
	amenities: Amenity[] | Amenity;
}
