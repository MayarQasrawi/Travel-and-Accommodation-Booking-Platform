import { BrushCleaning, Star } from "lucide-react";
import { nanoid } from "nanoid";
import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CURRENCY } from "@/constants/storage";
import { type Amenity, useAmenities } from "@/Pages/SearchResultsPage/hooks/useAmenities";

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

	const handleStarChange = (star: number, checked: boolean) => {
		setFilters((prev: Filters) => ({
			...prev,
			starRating: checked ? [...prev.starRating, star] : prev.starRating.filter((s) => s !== star),
		}));
	};

	const handleAmenityChange = (id: number, checked: boolean) => {
		setFilters((prev: Filters) => ({
			...prev,
			amenities: checked ? [...prev.amenities, id] : prev.amenities.filter((a) => a !== id),
		}));
	};

	const handlePriceChange = (val: [number, number]) => {
		setFilters((prev: Filters) => ({
			...prev,
			priceRange: val,
		}));
	};

	const handleClearFilters = () => {
		setFilters({
			priceRange: [0, 1000],
			starRating: [],
			amenities: [],
		});
	};

	return (
		<Card className="p-4 bg-muted/40 max-w-[320px] max-h-screen overflow-y-auto space-y-2 rounded-lg">
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
				<div className="space-y-2">
					<h2 className="text-sm font-bold text-muted-foreground">Price Range</h2>
					<Slider
						value={filters.priceRange}
						min={0}
						max={1000}
						step={10}
						onValueChange={(val) => handlePriceChange(val as [number, number])}
					/>
					<div className="flex justify-between text-sm text-muted-foreground font-medium">
						<span>
							{CURRENCY}
							{filters.priceRange[0]}
						</span>
						<span>
							{CURRENCY}
							{filters.priceRange[1]}
						</span>
					</div>
				</div>

				{/* Star Rating */}
				<div className="space-y-2">
					<h2 className="text-sm font-bold text-muted-foreground">Star Rating</h2>
					<div className="space-y-2">
						{[5, 4, 3, 2, 1].map((star) => (
							<div key={`rating-${star}`} className="flex items-center gap-2">
								<Checkbox
									checked={filters.starRating.includes(star)}
									onCheckedChange={(checked) => handleStarChange(star, Boolean(checked))}
									className="border-2"
								/>
								<Label className="flex items-center gap-1 cursor-pointer">
									<div className="flex">
										{Array.from({ length: star }).map(() => (
											<Star key={nanoid()} className="w-4 h-4 text-gold fill-gold" />
										))}
									</div>
									<span className="text-sm text-muted-foreground">& up</span>
								</Label>
							</div>
						))}
					</div>
				</div>

				{/* Amenities */}
				<div className="space-y-2">
					<h2 className="text-sm font-bold text-muted-foreground">Amenities</h2>
					<div className="flex flex-wrap max-h-56 overflow-y-auto gap-2">
						{amenities.map((amenity: Amenity) => (
							<div key={amenity.id} className="flex items-center gap-1">
								<Checkbox
									className="border-2"
									checked={filters.amenities.includes(amenity.id)}
									onCheckedChange={(checked) => handleAmenityChange(amenity.id, Boolean(checked))}
								/>
								<Label className="text-sm cursor-pointer">{amenity.name}</Label>
							</div>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
