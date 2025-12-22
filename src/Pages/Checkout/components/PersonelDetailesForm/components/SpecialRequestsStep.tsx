import FormSection from "@/components/Form/FormSection";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface SpecialRequestsStepProps {
	value: string;
	onChange: (value: string) => void;
}

export function SpecialRequestsStep({ value, onChange }: SpecialRequestsStepProps) {
	return (
		<FormSection title="Special Requests">
			<Label htmlFor="specialRequests">Any additional requests?</Label>
			<Textarea
				id="specialRequests"
				value={value || ""}
				onChange={(e) => onChange(e.target.value)}
				placeholder="For example: late check-in, high floor preference"
				rows={4}
				className="border-2 mt-2"
			/>
		</FormSection>
	);
}
