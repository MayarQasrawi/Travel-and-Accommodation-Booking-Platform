import { BrushCleaning } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CURRENCY } from "@/constants/storage";
import { useAmenities } from "@/Pages/SearchResultsPage/hooks/useAmenities";
import type { useFilters } from "../../hooks/useFilters";
import AmenityCheckbox from "./AmenityCheckbox";
import FilterSection from "./FilterSection";
import { RangeSliderFilter } from "./RangeSliderFilter";
import StarRating from "./StarRatingCheckbox";

const STAR_RATINGS = [5, 4, 3, 2, 1] as const;

interface FiltersSidebarProps {
	filterState: ReturnType<typeof useFilters>;
}

export default function FiltersSidebar({ filterState }: FiltersSidebarProps) {
	const { data: amenities = [] } = useAmenities();
	const { filters, actions, config } = filterState;

	return (
		<Card className="p-4 bg-muted/40 max-w-[320px] max-h-screen overflow-y-auto space-y-2 rounded">
			<CardHeader>
				<CardTitle className="text-xl font-extrabold">Filters</CardTitle>
				<CardAction>
					<Button
						className="hover:scale-110"
						variant="ghost"
						onClick={actions.clearFilters}
						title="Clear Filters"
						aria-label="Clear all filters"
					>
						<BrushCleaning size={20} />
					</Button>
				</CardAction>
			</CardHeader>

			<CardContent className="space-y-8">
				<FilterSection title="Price Range">
					<RangeSliderFilter
						value={filters.priceRange}
						min={config.min}
						max={config.max}
						step={config.step}
						currency={CURRENCY}
						onChange={actions.updatePriceRange}
					/>
				</FilterSection>

				<FilterSection title="Star Rating">
					{STAR_RATINGS.map((star) => (
						<StarRating
							key={star}
							star={star}
							checked={filters.starRating.includes(star)}
							onChange={(checked) => actions.updateStarRating(star, checked)}
						/>
					))}
				</FilterSection>

				<FilterSection title="Amenities">
					<div className="flex flex-col gap-2">
						{amenities.map((amenity) => (
							<AmenityCheckbox
								key={amenity.id}
								amenity={amenity}
								checked={filters.amenities.includes(amenity.id)}
								onChange={(checked) => actions.updateAmenity(amenity.id, checked)}
							/>
						))}
					</div>
				</FilterSection>
			</CardContent>
		</Card>
	);
}
