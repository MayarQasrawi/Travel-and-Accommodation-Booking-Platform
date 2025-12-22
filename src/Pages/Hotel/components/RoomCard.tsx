import { Card } from "@/Pages/Home/components/hotel-card";
import type { Room } from "@/types/hotel";

interface RoomCardProps {
	room: Room;
	actions?: React.ReactNode;
}

export function RoomCard({ room, actions }: RoomCardProps) {
	return (
		<Card className={!room.availability ? "opacity-50 hover:shadow-none" : ""}>
			<Card.Image src={room.roomPhotoUrl} alt={room.roomType} />
			<Card.Content className="gap-y-1">
				<Card.Title>Room #{room.roomNumber}</Card.Title>
				<Card.Info
					roomType={room.roomType}
					numberOfAdults={room.capacityOfAdults}
					numberOfChildren={room.capacityOfChildren}
					hotelId={room.roomId}
				/>
				<Card.Amenities amenities={room.roomAmenities} />
				<Card.Price>
					<Card.DiscountedPrice>{room.price}</Card.DiscountedPrice>
				</Card.Price>

				{actions}
			</Card.Content>
		</Card>
	);
}
