import CartSummary from "./components/CartSummary";
import PersonalDetailsForm from "./components/PersonelDetailesForm/PersonalDetailsForm";

export default function CheckoutPage() {
	return (
		<div className="container mx-auto p-4 md:p-10 max-w-7xl">
			<div className="mb-8">
				<h1 className="text-4xl font-bold mb-2">Checkout</h1>
				<p className="text-gray-600">Complete your booking information</p>
			</div>

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
