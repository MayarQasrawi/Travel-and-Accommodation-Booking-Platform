import { useNavigate } from "react-router";
import PageHeader from "@/components/common/PageHeader";
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
			<PageHeader title="Cart Review" subtitle="Review your selected rooms before checkout" />

			<ol className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6 mb-8 list-none ">
				{cartItems.map((item, index) => (
					<li key={item.room.roomId} className="flex flex-col">
						<RoomCard
							room={item.room}
							actions={
								<div className="flex gap-2 mt-4">
									<Button
										onClick={() => {
											setSelectedIndex(index);
											handleCheckout();
										}}
										className="flex-1 gap-2"
									>
										Book
									</Button>

									<Button
										variant="destructive"
										onClick={() => removeFromCart(item.room.roomId)}
										className="flex-1 gap-2"
									>
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
