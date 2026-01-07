import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import type { UserTypes } from "@/types/user";

interface ProtectedRouteProps {
	children: ReactNode;
	requiredRole?: UserTypes;
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
	const { user, isAuthenticated, isLoading } = useAuth();

	if (isLoading) {
		return <div className="bg-red-300 h-screen">Loading...</div>; // or spinner
	}

	if (!isAuthenticated) {
		return <Navigate to={ROUTES.LOGIN} replace />;
	}

	if (requiredRole && user?.userType !== requiredRole) {
		return <Navigate to="/unauthorized" replace />;
	}

	return children;
}
