import { ROUTES } from "@/constants/routes";
import { CitiesPage, HotelsPage, RoomsPage } from "./lazyPages";
import { withSuspense } from "./SuspenseWrapper";

export const adminRoutes = [
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
];
