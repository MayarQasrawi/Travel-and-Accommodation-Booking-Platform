import PageHeader from "@/components/common/PageHeader";
import { useCartStore } from "@/store/cartStore";
import CartSummary from "./components/CartSummary";
import EmptyCart from "./components/CartSummary/EmptyCart";
import PersonalDetailsForm from "./components/PersonelDetailesForm/PersonalDetailsForm";

export default function CheckoutPage() {
	const { cartItems } = useCartStore();

	if (cartItems.length === 0) {
		return <EmptyCart />;
	}

	return (
		<div className="container mx-auto p-4 md:p-10 max-w-7xl min-h-screen">
			<PageHeader title="Checkout" subtitle="Review and complete your booking" />

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				<div className="lg:col-span-2">
					<PersonalDetailsForm />
				</div>
				<div className="lg:col-span-1">
					<CartSummary />
				</div>
			</div>
		</div>
	);
}
