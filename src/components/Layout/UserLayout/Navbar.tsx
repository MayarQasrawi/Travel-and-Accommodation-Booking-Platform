import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { ROUTES } from "@/constants/routes";

function Navbar() {
	return (
		<nav className="flex justify-between items-center  bg-primary-foreground p-4 z-40 absolute top-0 left-0 right-0  border-b-2 ">
			<ul className=" flex gap-5 rounded">
				<li className="cursor-pointer">
					<NavLink to={ROUTES.USER.HOME}>Home</NavLink>
				</li>
				<li className="cursor-pointer">
					<NavLink to={ROUTES.USER.SEARCH_RESULTS}>Search</NavLink>
				</li>
				<li className="cursor-pointer">
					<NavLink to="/user/bookings/">Bookings</NavLink>
				</li>
			</ul>
			<div className="flex items-center gap-4 ">
				<ShoppingCart size={24} className="cursor-pointer" />
				<Avatar className="h-8 w-8">
					<AvatarImage src="/path-to-user-image.jpg" alt="User" />
					<AvatarFallback className="bg-gray-300 rounded-full flex items-center justify-center h-8 w-8">
						U
					</AvatarFallback>
				</Avatar>
			</div>
		</nav>
	);
}

export default Navbar;
