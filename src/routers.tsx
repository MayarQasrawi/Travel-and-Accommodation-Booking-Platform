import { createBrowserRouter } from "react-router-dom";
import CitiesPage from "@/Pages/admin/cities/index";
import HotelsPage from "@/Pages/admin/hotels/index";
import RoomsPage from "@/Pages/admin/rooms/index";
import Home from "@/Pages/Home/index";
import LoginPage from "@/Pages/Login/index";
import AdminLayout from "./components/Layout/AdminLayout";
import HotelPage from "./Pages/SearchResultsPage/SearchResultsPage";

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
		path: "user",
		element: <Home />,
	},
	{
		path: "search-results/",
		element: <HotelPage />,
	},
	{
		path: "*",
		element: <div>not found</div>,
	},
]);

export default router;
