import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
	icon: LucideIcon;
	title: string;
	description: string;
	actionLabel: string;
	onAction: () => void;
	iconColor?: string;
	iconBgColor?: string;
}

function EmptyState({
	icon: Icon,
	title,
	description,
	actionLabel,
	onAction,
	iconColor = "text-gray-400",
	iconBgColor = "bg-gray-100",
}: EmptyStateProps) {
	return (
		<section className="flex items-center justify-center min-h-[90vh] p-6">
			<div className="text-center max-w-md">
				<div className="mb-6 flex justify-center">
					<div className={`rounded-full ${iconBgColor} p-6`}>
						<Icon className={`w-16 h-16 ${iconColor}`} />
					</div>
				</div>

				<h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>

				<p className="text-gray-500 mb-8">{description}</p>

				<Button onClick={onAction} className="w-full sm:w-auto px-8">
					{actionLabel}
				</Button>
			</div>
		</section>
	);
}

export default EmptyState;
