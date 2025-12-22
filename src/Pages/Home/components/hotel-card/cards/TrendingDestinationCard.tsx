import type { TrendingDestination } from "@/Pages/Home/hooks/useTrendingDestinations";
import { Card } from "../index";

interface TrendingDestinationCardProps {
	hotel: TrendingDestination;
}

export const TrendingDestinationCard: React.FC<TrendingDestinationCardProps> = ({ hotel }) => {
	return (
		<Card className="group cursor-pointer">
			<div className="relative overflow-hidden">
				<Card.Image
					src={hotel.thumbnailUrl}
					alt={hotel.cityName}
					className="group-hover:scale-110 transition-transform duration-500"
				/>

				<div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

				<div className="absolute bottom-0 left-0 right-0 p-6">
					<h3 className="text-2xl font-bold text-white mb-1">{hotel.cityName}</h3>
					<Card.Location className="text-primary-foreground">{hotel.countryName}</Card.Location>
				</div>
			</div>
		</Card>
	);
};
