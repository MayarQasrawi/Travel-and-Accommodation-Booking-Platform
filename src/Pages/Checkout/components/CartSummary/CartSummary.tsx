import { selectTotalPrice, useCartStore } from "@/store/cartStore";
import CartItemRow from "./CartItemRow";
import OrderTotals from "./OrderTotals";

function CartSummary() {
	const { cartItems, removeFromCart, selectedIndex } = useCartStore();
	const subtotal = useCartStore(selectTotalPrice);

	return (
		<section className=" rounded border-2 p-6">
			<header className="text-lg font-semibold mb-4">Booking Summary</header>

			<ul className="space-y-4 mb-6">
				{cartItems
					.filter((item) => item.room.roomId === selectedIndex)
					.map((item) => (
						<CartItemRow key={`${item.hotel.hotelId}-${item.room.roomId}`} item={item} onRemove={removeFromCart} />
					))}
			</ul>

			<OrderTotals subtotal={subtotal} />
		</section>
	);
}

export default CartSummary;
