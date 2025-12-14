import { createBrowserRouter } from "react-router-dom";
import CitiesPage from "@/Pages/admin/cities/index";
import HotelsPage from "@/Pages/admin/hotels/index";
import RoomsPage from "@/Pages/admin/rooms/index";
import Home from "@/Pages/Home/index";
import LoginPage from "@/Pages/Login/index";
import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout/UserLayout";
import HotelPage from "./Pages/Hotel/HotelPage";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LoginPage />,
	},
	{
		path: "admin/",
		element: <AdminLayout />,
		children: [
			{
				path: "cities",
				index: true,
				element: <CitiesPage />,
			},
			{
				path: "hotels",
				element: <HotelsPage />,
			},
			{
				path: "rooms",
				element: <RoomsPage />,
			},
		],
	},
	{
		path: "user/",
		element: <UserLayout />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: "search-results/",
				element: <SearchResultsPage />,
			},
			{
				path: "hotel/:hotelId",
				element: <HotelPage />,
			},
		],
	},

	{
		path: "*",
		element: <div>not found</div>,
	},
]);

export default router;
