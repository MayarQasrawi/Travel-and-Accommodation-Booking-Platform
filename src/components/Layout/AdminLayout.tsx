import { Outlet, useLocation } from "react-router-dom";
import Header from "@/components/admin/Header";
import Sidebar from "@/components/admin/Sidebar";
import { Title } from "@/components/admin/Title";
import { SidebarProvider } from "@/components/ui/sidebar";
import capitalize from "@/utils/capitalize";

function AdminLayout() {
	const { pathname } = useLocation();
	const currentSection = capitalize(pathname.split("/")[2]);

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
