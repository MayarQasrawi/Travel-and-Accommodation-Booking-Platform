import type { TrendingDestination } from "@/Pages/Home/hooks/useTrendingDestinations";
import { HotelCard, HotelCardImage, HotelCardLocation } from "./index";

interface TrendingDestinationCardProps {
	hotel: TrendingDestination;
}

export const TrendingDestinationCard: React.FC<TrendingDestinationCardProps> = ({ hotel }) => {
	return (
		<HotelCard className="group cursor-pointer">
			<div className="relative overflow-hidden">
				<HotelCardImage
					src={hotel.thumbnailUrl}
					alt={hotel.cityName}
					className="group-hover:scale-110 transition-transform duration-500"
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

				{/* City Name Overlay */}
				<div className="absolute bottom-0 left-0 right-0 p-6">
					<h3 className="text-2xl font-bold text-white mb-1">{hotel.cityName}</h3>
					<HotelCardLocation className="text-primary-foreground">{hotel.countryName}</HotelCardLocation>
				</div>
			</div>
		</HotelCard>
	);
};
