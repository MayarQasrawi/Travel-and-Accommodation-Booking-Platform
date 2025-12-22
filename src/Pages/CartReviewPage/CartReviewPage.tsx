import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { useCartStore } from "@/store/cartStore";
import EmptyCart from "../Checkout/components/CartSummary/EmptyCart";
import { RoomCard } from "../Hotel/components/RoomCard";

export default function CartReviewPage() {
	const navigate = useNavigate();
	const { cartItems, removeFromCart, selectedIndex, setSelectedIndex } = useCartStore();

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	const handleCheckout = () => {
		if (selectedIndex === null) {
			alert("Please select a room to checkout");
			return;
		}
		navigate(ROUTES.USER.CHECKOUT);
	};

	return (
		<section className="container mx-auto p-4 md:p-10 ">
			<header className="mb-8">
				<h1 className="text-4xl font-bold mb-2">Review Your Rooms</h1>
				<p className="text-gray-600">Review your selected rooms before checkout</p>
			</header>

			<ol className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6 mb-8 list-none ">
				{cartItems.map((item, index) => (
					<li key={item.room.roomId} className="flex flex-col">
						<RoomCard
							room={item.room}
							actions={
								<div className="flex gap-2 mt-4 flex-1">
									<Button
										onClick={() => {
											setSelectedIndex(index);
											handleCheckout();
										}}
										className="gap-2"
									>
										Book
									</Button>

									<Button variant="destructive" onClick={() => removeFromCart(item.room.roomId)} className="gap-2">
										Remove
									</Button>
								</div>
							}
						/>
					</li>
				))}
			</ol>
		</section>
	);
}
