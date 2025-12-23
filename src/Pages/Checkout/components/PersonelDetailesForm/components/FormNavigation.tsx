import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SubmitConfirmDialog } from "./SubmitConfirmDialog";

interface FormNavigationProps {
	currentStep: number;
	totalSteps: number;
	isSubmitting: boolean;
	onNext: () => void;
	onBack: () => void;
	onCancel: () => void;
	onSubmit: () => void;
}

export function FormNavigation({
	currentStep,
	totalSteps,
	isSubmitting,
	onNext,
	onBack,
	onCancel,
	onSubmit,
}: FormNavigationProps) {
	const isFirstStep = currentStep === 1;
	const isLastStep = currentStep === totalSteps;

	const [confirmOpen, setConfirmOpen] = useState(false);

	return (
		<>
			<div className="flex justify-between pt-4">
				<Button type="button" onClick={isFirstStep ? onCancel : onBack} variant="outline" disabled={isSubmitting}>
					{isFirstStep ? "Cancel" : "Back"}
				</Button>

				{isLastStep ? (
					<Button type="button" onClick={() => setConfirmOpen(true)} disabled={isSubmitting}>
						Proceed to Confirmation
					</Button>
				) : (
					<Button type="button" onClick={onNext}>
						Next
					</Button>
				)}
			</div>

			<SubmitConfirmDialog
				open={confirmOpen}
				onOpenChange={setConfirmOpen}
				onConfirm={onSubmit}
				isSubmitting={isSubmitting}
			/>
		</>
	);
}
