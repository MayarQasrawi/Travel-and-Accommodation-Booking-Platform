import { Star } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const StarRating: React.FC<{
	star: number;
	checked: boolean;
	onChange: (checked: boolean) => void;
}> = ({ star, checked, onChange }) => (
	<div className="flex items-center gap-2">
		<Checkbox checked={checked} onCheckedChange={onChange} className="border-2" id={`star-${star}`} />
		<Label htmlFor={`star-${star}`} className="flex items-center gap-1 cursor-pointer">
			<div className="flex">
				{Array.from({ length: star }).map(() => (
					<Star key={star} className="w-4 h-4 text-gold fill-gold" />
				))}
			</div>
			<span className="text-sm text-muted-foreground">& up</span>
		</Label>
	</div>
);

export default StarRating;
