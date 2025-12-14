import { createBrowserRouter } from "react-router-dom";
import CitiesPage from "@/Pages/admin/cities/index";
import HotelsPage from "@/Pages/admin/hotels/index";
import RoomsPage from "@/Pages/admin/rooms/index";
import Home from "@/Pages/Home/index";
import LoginPage from "@/Pages/Login/index";
import AdminLayout from "./components/Layout/AdminLayout";
import UserLayout from "./components/Layout/UserLayout/UserLayout";
import { ROUTES } from "./constants/routes";
import HotelPage from "./Pages/Hotel/HotelPage";
import SearchResultsPage from "./Pages/SearchResultsPage/SearchResultsPage";

const router = createBrowserRouter([
	{
		path: ROUTES.LOGIN,
		element: <LoginPage />,
	},
	{
		path: ROUTES.ADMIN.BASE,
		element: <AdminLayout />,
		children: [
			{
				path: ROUTES.ADMIN.CITIES,
				index: true,
				element: <CitiesPage />,
			},
			{
				path: ROUTES.ADMIN.HOTELS,
				element: <HotelsPage />,
			},
			{
				path: ROUTES.ADMIN.ROOMS,
				element: <RoomsPage />,
			},
		],
	},
	{
		path: ROUTES.USER.BASE,
		element: <UserLayout />,
		children: [
			{
				element: <Home />,
				index: true,
			},
			{
				path: ROUTES.USER.SEARCH_RESULTS,
				element: <SearchResultsPage />,
			},
			{
				path: ROUTES.USER.hotelDetail(":hotelId"),
				element: <HotelPage />,
			},
		],
	},
	{
		path: ROUTES.NOT_FOUND,
		element: <div>not found</div>,
	},
]);

export default router;
