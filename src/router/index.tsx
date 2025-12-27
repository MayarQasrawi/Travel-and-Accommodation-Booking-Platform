import { createBrowserRouter } from "react-router-dom";
import RouteErrorPage from "@/components/error/RouteErrorPage";
import AdminLayout from "@/components/Layout/AdminLayout";
import UserLayout from "@/components/Layout/UserLayout/UserLayout";
import { ROUTES } from "@/constants/routes";
import PageNotFound from "@/Pages/Errorpage/PageNotFound";
import Unauthorized from "@/Pages/Errorpage/Unauthorized";
import {
	BookingPage,
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
		errorElement: <RouteErrorPage />,
	},

	{
		path: ROUTES.ADMIN.BASE,
		element: (
			<ProtectedRoute requiredRole="Admin">
				<AdminLayout />
			</ProtectedRoute>
		),
		errorElement: <RouteErrorPage />,
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
		errorElement: <RouteErrorPage />,
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
			{
				path: ROUTES.USER.BOOKINGS,
				element: withSuspense(<BookingPage />),
			},
		],
	},

	{
		path: "/unauthorized",
		element: <Unauthorized />,
		errorElement: <RouteErrorPage />,
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
]);

export default router;
