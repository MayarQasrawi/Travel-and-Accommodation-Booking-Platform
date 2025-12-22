import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

function Navbar() {
	return (
		<nav className="flex justify-between items-center  bg-primary-foreground p-4 z-40 absolute top-0 left-0 right-0  border-b-2 ">
			<ul className=" flex gap-5 rounded">
				<NavItem to={ROUTES.USER.HOME} end>
					Home
				</NavItem>

				<NavItem to={ROUTES.USER.SEARCH_RESULTS}>Search</NavItem>

				<NavItem to="/user/bookings/">Bookings</NavItem>
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

interface NavItemProps {
	to: string;
	children: React.ReactNode;
	end?: boolean;
}

const NavItem = ({ to, children, end = false }: NavItemProps) => (
	<li>
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				cn("transition-colors", isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary")
			}
		>
			{children}
		</NavLink>
	</li>
);
