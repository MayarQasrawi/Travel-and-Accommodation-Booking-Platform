import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import type { Amenity } from "../../hooks/useAmenities";

const AmenityCheckbox: React.FC<{
	amenity: Amenity;
	checked: boolean;
	onChange: (checked: boolean) => void;
}> = ({ amenity, checked, onChange }) => {
	const id = `amenity-${amenity.id}`;

	return (
		<div className="flex items-center gap-1">
			<Checkbox id={id} checked={checked} onCheckedChange={(c) => onChange(Boolean(c))} className="border-2" />
			<Label htmlFor={id} className="text-sm cursor-pointer">
				{amenity.name}
			</Label>
		</div>
	);
};
export default AmenityCheckbox;
