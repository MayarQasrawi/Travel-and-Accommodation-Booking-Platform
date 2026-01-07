import { ROUTES } from "@/constants/routes";
import {
	BookingPage,
	CartReviewPage,
	CheckoutPage,
	ConfirmationPage,
	HomePage,
	HotelPage,
	SearchResultsPage,
} from "./lazyPages";
import { withSuspense } from "./SuspenseWrapper";

export const userRoutes = [
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
];
