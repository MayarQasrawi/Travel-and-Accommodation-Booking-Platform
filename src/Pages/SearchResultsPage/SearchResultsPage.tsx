import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchHotels } from "@/Pages/Home/hooks/useSearchHotels";
import { FeaturedDealCard } from "../Home/components/hotel-card/FeaturedDealCard";
import FiltersSidebar from "./FiltersSidebar";

export default function SearchResultsPage() {
	const location = useLocation();
	const initialForm = location.state;

	const [filters, setFilters] = useState({
		priceRange: [0, 1000],
		starRating: [],
		amenities: [],
	});

	const {
		data: hotels,
		refetch,
		isLoading,
	} = useSearchHotels({
		city: initialForm.query,
		checkInDate: initialForm.checkIn.toISOString(),
		checkOutDate: initialForm.checkOut.toISOString(),
		adults: initialForm.adults,
		children: initialForm.children,
		numberOfRooms: initialForm.rooms,
	});

	// Apply client-side filtering
	const filteredHotels = hotels?.filter((hotel) => {
		const matchesPrice = hotel.finalPrice >= filters.priceRange[0] && hotel.finalPrice <= filters.priceRange[1];

		const matchesStar = filters.starRating.length === 0 || filters.starRating.includes(hotel.hotelStarRating);

		const matchesAmenities =
			filters.amenities.length === 0 || filters.amenities.every((a) => hotel.amenities?.includes(a));

		return matchesPrice && matchesStar && matchesAmenities;
	});

	return (
		<div className="flex max-w-7xl mx-auto mt-6 gap-6">
			{/* Sidebar Filters */}
			<div className="w-1/4">
				<FiltersSidebar filters={filters} setFilters={setFilters} />
			</div>

			{/* Hotel Results */}
			<div className="flex-1 space-y-4">
				{isLoading && <div>Loading...</div>}

				{!isLoading && filteredHotels?.length === 0 && <div>No hotels found.</div>}

				{filteredHotels?.map((hotel) => (
					<FeaturedDealCard key={hotel.hotelId} hotel={hotel} />
				))}
			</div>
		</div>
	);
}
