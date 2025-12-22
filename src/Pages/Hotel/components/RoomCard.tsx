import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/Pages/Home/components/hotel-card";
import type { Room } from "@/types/hotel";

interface RoomCardProps {
	room: Room;
	onAddToCart: (room: Room) => void;
}

export function RoomCard({ room, onAddToCart }: RoomCardProps) {
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
				<Button
					onClick={() => onAddToCart(room)}
					disabled={!room.availability}
					className={`gap-2 ${!room.availability ? "cursor-not-allowed" : "cursor-pointer"}`}
				>
					<ShoppingCart size={18} />
					{room.availability ? "Add to Cart" : "Not Available"}
				</Button>
			</Card.Content>
		</Card>
	);
}
