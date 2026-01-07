import AdminLayout from "@/components/Layout/AdminLayout";
import UserLayout from "@/components/Layout/UserLayout/UserLayout";
import { ProtectedRoute } from "./ProtectedRoute";

export const AdminRoute = () => (
	<ProtectedRoute requiredRole="Admin">
		<AdminLayout />
	</ProtectedRoute>
);

export const UserRoute = () => (
	<ProtectedRoute requiredRole="User">
		<UserLayout />
	</ProtectedRoute>
);
