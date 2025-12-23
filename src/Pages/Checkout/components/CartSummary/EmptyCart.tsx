import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmptyState from "@/components/common/EmptyStateWithIcon";

function EmptyCart() {
	const navigate = useNavigate();

	return (
		<EmptyState
			icon={ShoppingCart}
			title="Your cart is empty"
			description="Looks like you haven't added anything to your cart yet"
			actionLabel="Go Back"
			onAction={() => navigate(-1)}
		/>
	);
}

export default EmptyCart;
