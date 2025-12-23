import { Outlet } from "react-router";
import Footer from "@/components/Layout/UserLayout/Footer";
import Navbar from "./Navbar/Navbar";

function UserLayout() {
	return (
		<>
			<Navbar />
			<main className="mt-16">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default UserLayout;
