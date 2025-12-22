import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { EmptyState } from "@/components/common/EmptyState";
import { Loader } from "@/components/common/Loader";
import MainSearchBar from "@/Pages/Home/components/SearchBar/MainSearchBar";
import { type SearchParams, useSearchHotels } from "@/Pages/Home/hooks/useSearchHotels";
import { filterHotels } from "@/utils/filterHotels";
import { parseSearchParams } from "@/utils/searchQuery";
import { SearchResultCard } from "../Home/components/hotel-card/cards/SearchResultCard";
import FiltersSidebar from "./components/FilterSidebar/FiltersSidebar";
import { useFilters } from "./hooks/useFilters";

export default function SearchResultsPage() {
	const [params] = useSearchParams();
	const initialForm = parseSearchParams(params);
	const [searchParams, setSearchParams] = useState<SearchParams>(initialForm);
	const filterState = useFilters();

	//  Ensure URL changes (Back/Forward) → update local state
	useEffect(() => {
		const parsed = parseSearchParams(params);
		setSearchParams(parsed);
	}, [params]);

	const updateSearch = (form: SearchParams) => {
		setSearchParams(form);
	};

	const { data: hotels, isLoading } = useSearchHotels(searchParams);
	const filteredHotels = Array.isArray(hotels) ? filterHotels(hotels, filterState.filters) : [];

	return (
		<section>
			<div className="flex w-full gap-6">
				<aside className="w-72 sticky top-0 max-h-screen overflow-y-auto shadow-sm bg-background border-r hidden md:block">
					<FiltersSidebar filterState={filterState} />
				</aside>

				<section className="flex-1  flex flex-col gap-6 p-4">
					<header>
						<MainSearchBar onSearch={updateSearch} initialValues={searchParams} className="w-full" />
					</header>
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
