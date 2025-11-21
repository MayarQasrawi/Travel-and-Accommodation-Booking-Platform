import { NavLink, useLocation } from "react-router-dom";
import { Building2, Hotel, DoorOpen, LogOut, User } from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter,

} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navigation = [
  { id: "cities", label: "Cities", path: "/admin/cities", icon: Building2 },
  { id: "hotels", label: "Hotels", path: "/admin/hotels", icon: Hotel },
  { id: "rooms", label: "Rooms", path: "/admin/rooms", icon: DoorOpen },
];

export default function AdminSidebar() {
  const location = useLocation();

  const{user} = useAuth();
  const handleLogout = () => {
    console.log("Logging out...");
    // implement actual logout logic
  };

  return (
    <Sidebar collapsible="icon" className="h-screen " variant="floating">
      {/* Sidebar Header with Trigger */}
      <SidebarHeader className="flex items-center gap-2 px-4 py-4">
        <span className="text-lg font-semibold sidebar-title">Travel Admin</span>
      </SidebarHeader>

      {/* Sidebar Content */}
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => {
            const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");

            return (
              <SidebarMenuItem key={item.id}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span className="sidebar-label">{item.label}</span>
                </NavLink>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* Sidebar Footer */}
      <SidebarFooter className="p-4 border-t">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-start gap-3 p-2 h-auto"
            >
              <Avatar className="h-8 w-8 shrink-0">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start sidebar-user-info">
                <span className="text-sm font-medium">{user?.givenName} {user?.familyName}</span>
                {/* <span className="text-xs text-muted-foreground">email@test.com</span> */}
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarFooter>
    </Sidebar>
  );
}