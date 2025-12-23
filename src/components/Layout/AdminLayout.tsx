import { Outlet } from "react-router-dom";
import Sidebar from "@/components/admin/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

function AdminLayout() {
	return (
		<SidebarProvider>
			<div className="flex w-screen h-screen">
				<Sidebar />
				<div className="flex-1 flex flex-col">
					<Outlet />
				</div>
			</div>
		</SidebarProvider>
	);
}

export default AdminLayout;
