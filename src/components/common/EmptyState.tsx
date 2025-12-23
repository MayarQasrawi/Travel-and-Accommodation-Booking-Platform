import img from "@/assets/images/empty-folder.jpg";

interface EmptyStateProps {
	message?: string;
	imageUrl?: string;
	altText?: string;
	className?: string;
}

export function EmptyState({
	message = "No data found.",
	imageUrl,
	altText = "Empty state illustration",
	className = "",
}: EmptyStateProps) {
	return (
		<div
			className={`flex flex-col items-center justify-center p-12  text-center text-muted-foreground ${className}`}
			role="alert"
			aria-live="polite"
		>
			<img
				src={imageUrl ? imageUrl : img}
				alt={altText}
				className="mb-4 max-w-xs w-full h-auto object-contain"
				loading="lazy"
			/>

			<p className="text-lg font-medium">{message}</p>
		</div>
	);
}
