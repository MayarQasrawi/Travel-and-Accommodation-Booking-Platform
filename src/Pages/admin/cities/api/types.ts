export interface CitiesQueryParams {
	search?: string;
}

export interface CreateCityData {
	name: string;
	description: string;
}

export interface UpdateCityData extends CreateCityData {
	id: number;
}

export interface City {
	id: number;
	name: string;
	description: string;
	// postOffice: string
	// numberOfHotels: number
	// createdAt: string
	// updatedAt: string
}
