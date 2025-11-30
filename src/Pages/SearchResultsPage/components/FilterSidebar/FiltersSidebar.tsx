import { BrushCleaning } from "lucide-react";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CURRENCY } from "@/constants/storage";
import { useAmenities } from "@/Pages/SearchResultsPage/hooks/useAmenities";
import AmenityCheckbox from "./AmenityCheckbox";
import FilterSection from "./FilterSection";
import { RangeSliderFilter } from "./RangeSliderFilter";
import StarRating from "./StarRatingCheckbox";

interface Filters {
	priceRange: [number, number];
	starRating: number[];
	amenities: number[];
}

interface FiltersProps {
	filters: Filters;
	setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export default function FiltersSidebar({ filters, setFilters }: FiltersProps) {
	const { data: amenities = [] } = useAmenities();

	const handleStarChange = (star: number, checked: boolean) =>
		setFilters((prev) => ({
			...prev,
			starRating: checked ? [...prev.starRating, star] : prev.starRating.filter((s) => s !== star),
		}));

	const handleAmenityChange = (id: number, checked: boolean) =>
		setFilters((prev) => ({
			...prev,
			amenities: checked ? [...prev.amenities, id] : prev.amenities.filter((a) => a !== id),
		}));

	const handlePriceChange = (val: [number, number]) => setFilters((prev) => ({ ...prev, priceRange: val }));

	const handleClearFilters = () => setFilters({ priceRange: [0, 1000], starRating: [], amenities: [] });

	return (
		<Card className="p-4 bg-muted/40 max-w-[320px] max-h-screen overflow-y-auto space-y-2 rounded">
			<CardHeader>
				<CardTitle className="text-xl font-extrabold">Filters</CardTitle>
				<CardAction>
					<Button className="hover:scale-110" variant="ghost" onClick={handleClearFilters} title="Clear Filters">
						<BrushCleaning size={20} />
					</Button>
				</CardAction>
			</CardHeader>

			<CardContent className="space-y-8">
				{/* Price Range */}
				<FilterSection title="Price Range">
					<RangeSliderFilter
						value={filters.priceRange}
						min={0}
						max={1000}
						step={10}
						currency={CURRENCY}
						onChange={handlePriceChange}
					/>
				</FilterSection>

				{/* Star Rating */}
				<FilterSection title="Star Rating">
					{[5, 4, 3, 2, 1].map((star) => (
						<StarRating
							key={star}
							star={star}
							checked={filters.starRating.includes(star)}
							onChange={(checked) => handleStarChange(star, checked)}
						/>
					))}
				</FilterSection>

				{/* Amenities */}
				<FilterSection title="Amenities">
					<div className="flex flex-wrap max-h-56 overflow-y-auto gap-2">
						{amenities.map((amenity) => (
							<AmenityCheckbox
								key={amenity.id}
								amenity={amenity}
								checked={filters.amenities.includes(amenity.id)}
								onChange={(checked) => handleAmenityChange(amenity.id, checked)}
							/>
						))}
					</div>
				</FilterSection>
			</CardContent>
		</Card>
	);
}
