import { Outlet } from "react-router";
import Footer from "@/Pages/Home/components/sections/Footer";
import Navbar from "./Navbar";

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
