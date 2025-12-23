interface StepIndicatorProps {
	currentStep: number;
	totalSteps: number;
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
	return (
		<div className="flex justify-between mb-8">
			{Array.from({ length: totalSteps }, (_, i) => i + 1).map((num) => (
				<div key={num} className="flex items-center flex-1">
					<div
						className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
							currentStep >= num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
						}`}
					>
						{num}
					</div>
					{num < totalSteps && <div className={`flex-1 h-1 mx-2 ${currentStep > num ? "bg-primary" : "bg-muted"}`} />}
				</div>
			))}
		</div>
	);
}
