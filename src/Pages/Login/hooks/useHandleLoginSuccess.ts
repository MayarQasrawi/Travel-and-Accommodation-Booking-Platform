import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTES, USER_ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";
import type { UserTypes } from "@/types/user";
import type { LoginResponse } from "../API/types";

const roleRoutes: Record<UserTypes, string> = {
	Admin: ADMIN_ROUTES.BASE,
	User: USER_ROUTES.HOME,
};

export function useHandleLoginSuccess() {
	const { setAuth } = useAuth();
	const navigate = useNavigate();

	const handleLoginSuccess = (data: LoginResponse) => {
		setAuth(data.authentication);

		console.log("Login succeeded:", data);
		const role: UserTypes = data.userType;
		console.log("User role:", role);
		if (role in roleRoutes) {
			navigate(roleRoutes[role]);
		} else {
			navigate("/");
		}
	};

	return handleLoginSuccess;
}
