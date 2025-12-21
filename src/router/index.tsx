import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "@/components/Layout/AdminLayout";
import UserLayout from "@/components/Layout/UserLayout/UserLayout";
import { ROUTES } from "@/constants/routes";
import PageNotFound from "@/Pages/Errorpage/PageNotFound";
import Unauthorized from "@/Pages/Errorpage/Unauthorized";
import {
	CartReviewPage,
	CheckoutPage,
	CitiesPage,
	ConfirmationPage,
	HomePage,
	HotelPage,
	HotelsPage,
	LoginPage,
	RoomsPage,
	SearchResultsPage,
} from "./lazyPages";
import { ProtectedRoute } from "./ProtectedRoute";
import { withSuspense } from "./SuspenseWrapper";

export const router = createBrowserRouter([
	{
		path: ROUTES.LOGIN,
		element: withSuspense(<LoginPage />),
	},

	{
		path: ROUTES.ADMIN.BASE,
		element: (
			<ProtectedRoute requiredRole="Admin">
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: withSuspense(<CitiesPage />),
			},
			{
				path: ROUTES.ADMIN.HOTELS,
				element: withSuspense(<HotelsPage />),
			},
			{
				path: ROUTES.ADMIN.ROOMS,
				element: withSuspense(<RoomsPage />),
			},
		],
	},

	{
		path: ROUTES.USER.BASE,
		element: (
			<ProtectedRoute requiredRole="User">
				<UserLayout />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: withSuspense(<HomePage />),
			},
			{
				path: ROUTES.USER.SEARCH_RESULTS,
				element: withSuspense(<SearchResultsPage />),
			},
			{
				path: ROUTES.USER.hotelDetail(":hotelId"),
				element: withSuspense(<HotelPage />),
			},
			{
				path: ROUTES.USER.CART_REVIEW,
				element: withSuspense(<CartReviewPage />),
			},
			{
				path: ROUTES.USER.CHECKOUT,
				element: withSuspense(<CheckoutPage />),
			},
			{
				path: ROUTES.USER.CONFIRMATION,
				element: withSuspense(<ConfirmationPage />),
			},
		],
	},

	{
		path: "/unauthorized",
		element: <Unauthorized />,
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
]);

export default router;
