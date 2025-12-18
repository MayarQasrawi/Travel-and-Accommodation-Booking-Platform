import { ShoppingCart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Room } from "@/types/hotel";
import { ImageGallery } from "./ImageGallery/ImageGallery";

interface RoomCardProps {
	room: Room;
	onAddToCart: (room: Room) => void;
	onImageClick?: (index: number) => void;
}

export function RoomCard({ room, onAddToCart, onImageClick }: RoomCardProps) {
	return (
		<Card>
			<CardContent className="p-4">
				<ImageGallery images={[room.roomPhotoUrl]} alt={room.roomType} onImageClick={onImageClick} />

				<div className="mt-4 space-y-3">
					<div>
						<h3 className="text-xl font-semibold">{room.roomType}</h3>
						<p className="text-sm text-muted-foreground mt-1">Room #{room.roomNumber}</p>
					</div>

					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<div className="flex items-center gap-1">
							<Users size={16} />
							<span>{room.capacityOfAdults} Adults</span>
						</div>
						{room.capacityOfChildren > 0 && <span>{room.capacityOfChildren} Children</span>}
					</div>

					{room.roomAmenities && room.roomAmenities.length > 0 && (
						<div className="flex flex-wrap gap-2">
							{room.roomAmenities.map((amenity, index) => (
								<span key={index} className="text-xs px-2 py-1 bg-muted rounded" title={amenity.description}>
									{amenity.name}
								</span>
							))}
						</div>
					)}

					<div className="flex items-center justify-between pt-2 border-t">
						<div>
							<span className="text-2xl font-bold">${room.price}</span>
							<span className="text-sm text-muted-foreground">/night</span>
						</div>
						<Button onClick={() => onAddToCart(room)} disabled={!room.availability} className="gap-2">
							<ShoppingCart size={18} />
							{room.availability ? "Add to Cart" : "Not Available"}
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
