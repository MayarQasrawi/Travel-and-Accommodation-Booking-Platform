import type { Filters } from "@/Pages/SearchResultsPage/hooks/useFilters";
import type { SearchResult } from "@/types/hotel";

export function filterHotels(hotels: SearchResult[], filters: Filters): SearchResult[] {
	return hotels.filter((hotel) => {
		const price = hotel.roomPrice - (hotel?.discount || 0);
		const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];

		const matchesStar = filters.starRating.length === 0 || filters.starRating.includes(hotel.starRating);

		const hotelAmenityIds = Array.isArray(hotel.amenities) ? hotel.amenities.map((a) => a.id) : [hotel.amenities.id];
		const matchesAmenities =
			filters.amenities.length === 0 || filters.amenities.every((id: number) => hotelAmenityIds.includes(id));

		return matchesPrice && matchesStar && matchesAmenities;
	});
}
