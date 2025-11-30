import { Star } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface Amenity {
	id: number;
	name: string;
	description: string;
}

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
	const mockAmenities: Amenity[] = [
		{ id: 1, name: "Free Wi-Fi", description: "" },
		{ id: 2, name: "Air Conditioning", description: "" },
		{ id: 3, name: "Mini Bar", description: "" },
		{ id: 4, name: "Flat-Screen TV", description: "" },
		{ id: 5, name: "Coffee Maker", description: "" },
		{ id: 6, name: "Safe", description: "" },
		{ id: 7, name: "Complimentary Toiletries", description: "" },
		{ id: 8, name: "Bathtub", description: "" },
		{ id: 9, name: "Desk and Chair", description: "" },
		{ id: 10, name: "Slippers", description: "" },
	];

	const [amenities] = useState<Amenity[]>(mockAmenities);

	const handleStarChange = (star: number, checked: boolean) => {
		setFilters((prev) => ({
			...prev,
			starRating: checked ? [...prev.starRating, star] : prev.starRating.filter((s) => s !== star),
		}));
	};

	const handleAmenityChange = (id: number, checked: boolean) => {
		setFilters((prev) => ({
			...prev,
			amenities: checked ? [...prev.amenities, id] : prev.amenities.filter((a) => a !== id),
		}));
	};

	return (
		<div className="space-y-6">
			{/* Price Range */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg">Price Range</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<Slider
							value={filters.priceRange}
							min={0}
							max={1000}
							step={10}
							onValueChange={(val) =>
								setFilters((prev) => ({
									...prev,
									priceRange: val as [number, number],
								}))
							}
						/>
						<div className="flex justify-between text-sm text-muted-foreground">
							<span>${filters.priceRange[0]}</span>
							<span>${filters.priceRange[1]}</span>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Star Rating */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg">Star Rating</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-3">
						{[5, 4, 3, 2, 1].map((star) => (
							<div key={star} className="flex items-center gap-2">
								<Checkbox
									checked={filters.starRating.includes(star)}
									onCheckedChange={(checked) => handleStarChange(star, Boolean(checked))}
								/>
								<Label className="flex items-center gap-1 cursor-pointer">
									<div className="flex">
										{Array.from({ length: star }).map(() => (
											<Star key={`star-${star}`} className="w-4 h-4 text-primary fill-primary" />
										))}
									</div>
									<span className="text-sm text-muted-foreground">& up</span>
								</Label>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			{/* Amenities */}
			<Card>
				<CardHeader>
					<CardTitle className="text-lg">Amenities</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-3 max-h-60 overflow-y-auto">
						{amenities.map((amenity) => (
							<div key={amenity.id} className="flex items-center gap-2">
								<Checkbox
									checked={filters.amenities.includes(amenity.id)}
									onCheckedChange={(checked) => handleAmenityChange(amenity.id, Boolean(checked))}
								/>
								<Label className="text-sm cursor-pointer">{amenity.name}</Label>
							</div>
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
