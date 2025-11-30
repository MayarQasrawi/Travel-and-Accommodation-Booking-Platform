export function HotelCardSkeleton() {
	return (
		<section className="overflow-hidden bg-primary-foreground rounded border-2 animate-pulse">
			<article className="flex flex-col h-full">
				{/* Image placeholder */}
				<div className="h-46 bg-muted w-full" />

				{/* Text placeholder */}
				<div className="p-4 space-y-3">
					<div className="h-6 bg-muted rounded w-3/4" />
					<div className="h-6 bg-muted rounded w-1/2" />
					<div className="h-6 bg-muted rounded w-2/3" />
					<div className="h-4 bg-muted rounded w-2/3" />
				</div>
			</article>
		</section>
	);
}
