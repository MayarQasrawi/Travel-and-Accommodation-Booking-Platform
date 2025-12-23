import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Amenity {
	name: string;
	description?: string;
}

interface HotelAmenitiesProps {
	amenities: Amenity[];
}

export function HotelAmenities({ amenities }: HotelAmenitiesProps) {
	if (!amenities || amenities.length === 0) return null;

	return (
		<Accordion type="multiple" className="space-y-2">
			{amenities.map((amenity, index) => (
				<AccordionItem key={index} value={`amenity-${index}`}>
					<AccordionTrigger className=" font-medium  ">{amenity.name}</AccordionTrigger>

					<AccordionContent className="text-muted-foreground">
						{amenity.description || "No description available."}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
