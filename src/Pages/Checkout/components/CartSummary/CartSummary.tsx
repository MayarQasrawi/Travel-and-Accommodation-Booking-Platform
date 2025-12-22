import { selectTotalPrice, useCartStore } from "@/store/cartStore";
import CartItemRow from "./CartItemRow";
import EmptyCart from "./EmptyCart";
import OrderTotals from "./OrderTotals";

function CartSummary() {
	const { cartItems, removeFromCart } = useCartStore();
	const subtotal = useCartStore(selectTotalPrice);

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<section className=" rounded border-2 p-6">
			<header className="text-lg font-semibold mb-4">Booking Summary</header>

			<ul className="space-y-4 mb-6">
				{cartItems.map((item) => (
					<CartItemRow key={`${item.hotel.hotelId}-${item.room.roomId}`} item={item} onRemove={removeFromCart} />
				))}
			</ul>

			<OrderTotals subtotal={subtotal} />
		</section>
	);
}

export default CartSummary;
