import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

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

export default NavItem;
