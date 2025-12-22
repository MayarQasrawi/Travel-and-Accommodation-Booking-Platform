import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CURRENCY } from "@/constants/storage";
import type { CartItem } from "@/store/cartStore";
import { formatDate } from "@/utils/formatDate";

interface CartItemRowProps {
	item: CartItem;
	onRemove: (roomId: number) => void;
}

function CartItemRow({ item, onRemove }: CartItemRowProps) {
	const { hotel, room, checkInDate, checkOutDate, pricePerNight } = item;

	function calculateNights(checkIn: string, checkOut: string) {
		const inDate = new Date(checkIn);
		const outDate = new Date(checkOut);
		const diffMs = outDate.getTime() - inDate.getTime();
		return Math.max(Math.ceil(diffMs / (1000 * 60 * 60 * 24)), 1);
	}

	const nights = calculateNights(checkInDate, checkOutDate);
	const lineTotal = pricePerNight * nights;

	return (
		<li className="border-b pb-4 last:border-b-0">
			<article className="space-y-2">
				<header className="flex justify-between items-start">
					<div className="text-sm text-gray-600">
						<h3 className="font-medium">{hotel.hotelName}</h3>
						<p className="text-sm text-gray-600">Room #{room.roomNumber}</p>
						<p className="text-sm text-gray-600">{room.roomType}</p>
						<p className="text-sm text-gray-500">
							{formatDate(checkInDate)} → {formatDate(checkOutDate)}
						</p>

						<p className="text-sm text-gray-500">
							{nights} night{nights !== 1 ? "s" : ""}
						</p>
					</div>

					<Button
						type="button"
						variant="ghost"
						onClick={() => onRemove(room.roomId)}
						aria-label={`Remove ${hotel.hotelName} room from cart`}
						className="text-destructive"
					>
						<Trash2 size={18} />
					</Button>
				</header>

				<footer className="flex justify-between text-sm">
					<span className="text-gray-600">
						{CURRENCY}
						{pricePerNight} × {nights}
					</span>
					<span className="font-semibold">
						{CURRENCY}
						{lineTotal.toFixed(2)}
					</span>
				</footer>
			</article>
		</li>
	);
}

export default CartItemRow;
