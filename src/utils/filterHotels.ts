import type { SearchResult } from "@/Pages/Home/hooks/useSearchHotels";
import type { Filters } from "@/Pages/SearchResultsPage/components/FilterSidebar/FiltersSidebar";

export function filterHotels(hotels: SearchResult[], filters: Filters): SearchResult[] {
	return hotels.filter((hotel) => {
		const price = hotel.roomPrice - hotel.discount;
		const matchesPrice = price >= filters.priceRange[0] && price <= filters.priceRange[1];

		const matchesStar = filters.starRating.length === 0 || filters.starRating.includes(hotel.starRating);

		const hotelAmenityIds = hotel.amenities.map((a) => a.id);
		const matchesAmenities =
			filters.amenities.length === 0 || filters.amenities.every((id) => hotelAmenityIds.includes(id));

		return matchesPrice && matchesStar && matchesAmenities;
	});
}
