import { ROUTES } from "@/constants/routes";
import CartIcon from "./CartIcon";
import NavItem from "./NavItem";
import UserAvatar from "./UserAvatar";

// The `end` prop ensures the NavLink matches the exact path only,
// so it won't be active for nested routes.
// For example, with `end` on "/" it won't stay active on "/about".
const navLinks = [
	{ to: ROUTES.USER.HOME, label: "Home", end: true },
	{ to: ROUTES.USER.SEARCH_RESULTS, label: "Search" },
	{ to: "/user/bookings/", label: "Bookings" },
];

function Navbar() {
	return (
		<nav className="flex justify-between items-center bg-primary-foreground p-4 z-40 absolute top-0 left-0 right-0 border-b-2">
			<ul className="flex gap-5 rounded">
				{navLinks.map(({ to, label, end }) => (
					<NavItem key={to} to={to} end={end}>
						{label}
					</NavItem>
				))}
			</ul>

			<div className="flex items-center gap-4">
				<CartIcon />
				<UserAvatar />
			</div>
		</nav>
	);
}

export default Navbar;
