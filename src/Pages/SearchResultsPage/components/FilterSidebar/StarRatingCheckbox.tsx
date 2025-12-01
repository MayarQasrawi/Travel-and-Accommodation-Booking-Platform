import { StarRating as Stars } from "@/components/admin/StarRating";
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
			<Stars rating={star} />
			{/* <div className="flex">
				{Array.from({ length: star }).map(() => (
					<Star key={star} className="w-4 h-4 text-primary fill-primary" />
				))}
			</div> */}
			{/* <span className="text-sm text-muted-foreground">{star}</span> */}
		</Label>
	</div>
);

export default StarRating;
