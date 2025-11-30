import { nanoid } from "nanoid";
import type { ComponentType } from "react";
import { Badge } from "@/components/ui/badge";
import { HotelCardSkeleton } from "../hotel-card/HotelCardSkeleton";

interface BaseHotel {
	hotelId?: number;
}

interface HotelSectionProps<T extends BaseHotel> {
	badgeIcon: React.ReactNode;
	badgeText: string;
	title: string;
	highlight: string;
	subtitle?: string;
	hotels: T[];
	CardComponent: ComponentType<{ hotel: T }>;
	backgroundPattern: React.ReactNode;
	reverse?: boolean;
	bgColor?: string;
	isLoading: boolean;
}

export function HotelSection<T extends BaseHotel>({
	badgeIcon,
	badgeText,
	title,
	highlight,
	subtitle,
	hotels,
	CardComponent,
	backgroundPattern,
	reverse = false,
	bgColor = "bg-beige/30",
	isLoading,
}: HotelSectionProps<T>) {
	if (!hotels) return null;
	return (
		<section className={`relative py-24 min-h-screen flex items-center  px-6 overflow-hidden ${bgColor}`}>
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-90">{backgroundPattern}</div>

			<div className="max-w-7xl mx-auto relative z-10">
				<div className={`flex flex-col lg:flex-row gap-16 items-start ${reverse ? "lg:flex-row-reverse" : ""}`}>
					{/* Sidebar */}
					<div className="lg:w-1/3 lg:sticky lg:top-24 space-y-6">
						<Badge variant="destructive" className="bg-dark-green/10 text-primary">
							{badgeIcon}
							{badgeText}
						</Badge>

						<div>
							<h2 className="text-5xl md:text-6xl font-bold text-dark-green/80 mb-4 leading-tight">
								{title}
								<span className="block text-foreground">{highlight}</span>
							</h2>
							{subtitle && <p className="text-xl text-muted-foreground leading-relaxed">{subtitle}</p>}
						</div>
					</div>

					{/* Cards Grid */}
					<div className="lg:w-2/3 space-y-6">
						<div className="grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
							{isLoading
								? Array.from({ length: 3 }).map((_, i) => <HotelCardSkeleton key={nanoid()} />)
								: hotels.slice(0, 3).map((hotel) => <CardComponent key={hotel?.hotelId} hotel={hotel} />)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
