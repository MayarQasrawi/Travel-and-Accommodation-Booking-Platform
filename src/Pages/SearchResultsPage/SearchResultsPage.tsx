import { useState } from "react";
import { useLocation } from "react-router-dom";
import { EmptyState } from "@/components/common/EmptyState";
import { Loader } from "@/components/common/Loader";
import MainSearchBar, { FORM } from "@/Pages/Home/components/SearchBar/MainSearchBar";
import { useSearchHotels } from "@/Pages/Home/hooks/useSearchHotels";
import { filterHotels } from "@/utils/filterHotels";
import { SearchResultCard } from "../Home/components/hotel-card/SearchResultCard";
import FiltersSidebar from "./components/FilterSidebar/FiltersSidebar";
import { useFilters } from "./hooks/useFilters";

export default function SearchResultsPage() {
	const location = useLocation();
	const initialForm = location.state || FORM;
	const [searchParams, setSearchParams] = useState(initialForm);

	const filterState = useFilters();

	const { data: hotels, isLoading } = useSearchHotels({
		city: searchParams.query,
		checkInDate: searchParams.checkIn.toISOString(),
		checkOutDate: searchParams.checkOut.toISOString(),
		adults: searchParams.adults,
		children: searchParams.children,
		numberOfRooms: searchParams.rooms,
	});

	const filteredHotels = hotels ? filterHotels(hotels, filterState.filters) : [];

	return (
		<section className="flex flex-col pt-8 px-10 gap-6">
			<header className="flex items-end justify-end">
				<MainSearchBar initialValues={searchParams} onSearch={setSearchParams} className="bg-muted" />
			</header>

			<div className="flex w-full gap-6">
				<aside className="w-72 sticky top-0">
					<FiltersSidebar filterState={filterState} />
				</aside>

				<section className="flex-1">
					{isLoading && <Loader className="w-32 h-32" />}
					{!isLoading && filteredHotels.length === 0 && (
						<EmptyState message="No Result found" altText="No hotels illustration" />
					)}

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredHotels.map((hotel) => (
							<SearchResultCard key={hotel.hotelId} result={hotel} />
						))}
					</div>
				</section>
			</div>
		</section>
	);
}
