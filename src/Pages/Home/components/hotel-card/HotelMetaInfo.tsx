import { Bed, Calendar, Eye, EyeClosed, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { USER_ROUTES } from "@/constants/routes";

interface HotelMetaInfoProps {
	roomType: string;
	numberOfAdults: number;
	numberOfChildren: number;

	numberOfRooms?: number;
	checkInDate?: string;
	checkOutDate?: string;

	hotelId: number;
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
		<div className="space-y-3 flex flex-col">
			<div className="flex items-center justify-between">
				<div className="text-sm text-muted-foreground space-y-2">
					<p className="flex items-center gap-2">
						<Bed className="h-3 w-3" />
						{roomType}
					</p>

					<div className="flex items-center gap-4">
						<div className="flex items-center gap-4 text-sm text-muted-foreground">
							<div className="flex items-center gap-1">
								<Users size={16} />
								<span>{numberOfAdults} Adults</span>
							</div>
							{numberOfChildren > 0 && <span>{numberOfChildren} Children</span>}
						</div>

						{typeof numberOfRooms === "number" && (
							<p className="flex items-center gap-1">
								<span>{numberOfRooms}</span>
								<span>Room{numberOfRooms > 1 ? "s" : ""}</span>
							</p>
						)}
					</div>

					{checkInDate && checkOutDate && (
						<p className="flex items-center gap-2 text-xs">
							<Calendar className="h-3 w-3" />
							{checkInDate} → {checkOutDate}
						</p>
					)}
				</div>
			</div>

			{onBookNow && (
				<div className="w-full">
					<Button asChild className="w-full group">
						<Link to={USER_ROUTES.hotelDetail(hotelId)} className="flex items-center justify-center gap-2">
							View Details
							<EyeClosed className="block group-hover:hidden" />
							<Eye className="hidden group-hover:block" />
						</Link>
					</Button>
				</div>
			)}
		</div>
	);
};
