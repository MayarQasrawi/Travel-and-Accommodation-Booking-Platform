import { useCallback, useState } from "react";

export interface Filters {
	priceRange: [number, number];
	starRating: number[];
	amenities: number[];
}

const PRICE_RANGE_CONFIG = {
	min: 0,
	max: 1000,
	step: 10,
} as const;

const INITIAL_FILTERS: Filters = {
	priceRange: [PRICE_RANGE_CONFIG.min, PRICE_RANGE_CONFIG.max],
	starRating: [],
	amenities: [],
};

export function useFilters(initialFilters: Filters = INITIAL_FILTERS) {
	const [filters, setFilters] = useState<Filters>(initialFilters);

	const toggleArrayItem = useCallback(<T>(array: T[], item: T, shouldAdd: boolean): T[] => {
		return shouldAdd ? [...array, item] : array.filter((i) => i !== item);
	}, []);

	const updateStarRating = useCallback(
		(star: number, checked: boolean) => {
			setFilters((prev) => ({
				...prev,
				starRating: toggleArrayItem(prev.starRating, star, checked),
			}));
		},
		[toggleArrayItem],
	);

	const updateAmenity = useCallback(
		(id: number, checked: boolean) => {
			setFilters((prev) => ({
				...prev,
				amenities: toggleArrayItem(prev.amenities, id, checked),
			}));
		},
		[toggleArrayItem],
	);

	const updatePriceRange = useCallback((value: [number, number]) => {
		setFilters((prev) => ({ ...prev, priceRange: value }));
	}, []);

	const clearFilters = useCallback(() => {
		setFilters(INITIAL_FILTERS);
	}, []);

	const hasActiveFilters = useCallback(() => {
		return (
			filters.starRating.length > 0 ||
			filters.amenities.length > 0 ||
			filters.priceRange[0] !== PRICE_RANGE_CONFIG.min ||
			filters.priceRange[1] !== PRICE_RANGE_CONFIG.max
		);
	}, [filters]);

	return {
		filters,
		actions: {
			updateStarRating,
			updateAmenity,
			updatePriceRange,
			clearFilters,
		},
		computed: {
			hasActiveFilters: hasActiveFilters(),
		},
		config: PRICE_RANGE_CONFIG,
	};
}
