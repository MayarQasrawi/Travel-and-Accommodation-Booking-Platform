import { Building2, DoorOpen, Ellipsis, Hotel, LogOut, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { ADMIN_ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

const navigation = [
	{ id: "cities", label: "Cities", path: ADMIN_ROUTES.CITIES, icon: Building2 },
	{ id: "hotels", label: "Hotels", path: ADMIN_ROUTES.HOTELS, icon: Hotel },
	{ id: "rooms", label: "Rooms", path: ADMIN_ROUTES.ROOMS, icon: DoorOpen },
];

export default function AdminSidebar() {
	const { state } = useSidebar();
	const { user, logout } = useAuth();

	return (
		<Sidebar collapsible="offcanvas" className="h-screen " variant="floating">
			<SidebarHeader className="border-b ">
				<div className="flex items-center justify-between">
					{state === "collapsed" ? null : (
						<div className="flex items-center gap-2 px-4 py-2">
							<div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
								<Hotel className="h-4 w-4" />
							</div>
							<span className="font-semibold">Admin Panel</span>
						</div>
					)}
					{/* <SidebarTrigger /> */}
				</div>
			</SidebarHeader>

			{/* Sidebar Content */}
			<SidebarContent>
				<SidebarMenu>
					{navigation.map((item) => {
						return (
							<SidebarMenuItem key={item.id}>
								<NavLink
									to={item.path}
									className={({ isActive }) =>
										cn(
											"flex items-center  gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
											isActive
												? "bg-red text-accent-foreground"
												: "text-foreground hover:bg-accent hover:text-accent-foreground",
										)
									}
								>
									<item.icon className="shrink-0 " />
									{state === "collapsed" ? null : <span className="sidebar-label">{item.label}</span>}
								</NavLink>
							</SidebarMenuItem>
						);
					})}
				</SidebarMenu>
			</SidebarContent>

			{/* Sidebar Footer */}
			<SidebarFooter className="p-4 border-t">
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton>
									<Avatar className="h-8 w-8 shrink-0">
										<AvatarFallback className="bg-primary text-primary-foreground text-sm">
											<User className="h-4 w-4" />
										</AvatarFallback>
									</Avatar>
									<span className="text-sm font-medium ">
										{user?.givenName} {user?.familyName}
									</span>
									<Ellipsis className="ml-auto" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>
							<DropdownMenuContent side="left" className="w-56 ">
								<DropdownMenuItem onClick={logout}>
									<LogOut className="h-4 w-4 mr-2" />
									Logout
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
