import { createBrowserRouter } from "react-router-dom";
import RouteErrorPage from "@/components/error/RouteErrorPage";
import { ROUTES } from "@/constants/routes";
import PageNotFound from "@/Pages/Errorpage/PageNotFound";
import Unauthorized from "@/Pages/Errorpage/Unauthorized";
import { adminRoutes } from "./admin.routes";
import { LoginPage } from "./lazyPages";
import { AdminRoute, UserRoute } from "./routeLayouts";
import { withSuspense } from "./SuspenseWrapper";
import { userRoutes } from "./user.routes";

export const router = createBrowserRouter([
	{
		path: ROUTES.LOGIN,
		element: withSuspense(<LoginPage />),
		errorElement: <RouteErrorPage />,
	},

	{
		path: ROUTES.ADMIN.BASE,
		element: <AdminRoute />,
		errorElement: <RouteErrorPage />,
		children: adminRoutes,
	},

	{
		path: ROUTES.USER.BASE,
		element: <UserRoute />,
		errorElement: <RouteErrorPage />,
		children: userRoutes,
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
