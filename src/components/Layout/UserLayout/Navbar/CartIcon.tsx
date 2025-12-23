import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/constants/routes";
import { useCartStore } from "@/store/cartStore";

function CartIcon() {
	const { cartItems } = useCartStore();
	const itemCount = cartItems.length;

	return (
		<NavLink
			to={ROUTES.USER.CART_REVIEW}
			className="relative hover:opacity-70 transition-opacity"
			aria-label={`Shopping cart with ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
		>
			<ShoppingCart size={24} className="cursor-pointer" />
			{itemCount > 0 && (
				<Badge
					variant="destructive"
					className="absolute -top-2 -right-2 h-5 w-5 text-xs flex items-center justify-center font-semibold"
				>
					{itemCount}
				</Badge>
			)}
		</NavLink>
	);
}

export default CartIcon;
