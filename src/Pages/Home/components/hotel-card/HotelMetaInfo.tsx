import { Baby, Bed, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HotelMetaInfoProps {
	roomType: string;
	numberOfAdults: number;
	numberOfChildren: number;
	numberOfRooms: number;
	checkInDate: string;
	checkOutDate: string;
	hotelId?: number;
	onBookNow?: () => void;
}

export const HotelMetaInfo: React.FC<HotelMetaInfoProps> = ({
	roomType,
	numberOfAdults,
	numberOfChildren,
	numberOfRooms,
	checkInDate,
	checkOutDate,
	hotelId,
	onBookNow,
}) => {
	return (
		<div className="space-y-3">
			<div className="flex items-center justify-between">
				<div className="text-sm text-muted-foreground space-y-2">
					<p className="flex items-center gap-2">
						<Bed className="h-3 w-3" />
						{roomType}
					</p>

					<div className="flex items-center gap-4">
						<p className="flex items-center gap-1">
							<Users className="h-3 w-3" />
							<span>{numberOfAdults}</span>
						</p>

						<p className="flex items-center gap-1">
							<Baby className="h-3 w-3" />
							<span>{numberOfChildren}</span>
						</p>

						<p className="flex items-center gap-1">
							<span>{numberOfRooms}</span>
							<span>Room{numberOfRooms > 1 ? "s" : ""}</span>
						</p>
					</div>

					<p className="flex items-center gap-2 text-xs">
						<Calendar className="h-3 w-3" />
						{checkInDate} → {checkOutDate}
					</p>
				</div>

				{onBookNow && (
					<Button onClick={onBookNow}>
						<Link to={`/hotel/${hotelId}`}>View Details</Link>
					</Button>
				)}
			</div>
		</div>
	);
};
