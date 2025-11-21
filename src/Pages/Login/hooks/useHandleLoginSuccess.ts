import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import type { UserTypes } from "@/types/user";
import type { LoginResponse } from "../API/types";

const roleRoutes: Record<UserTypes, string> = {
	admin: "/admin/dashboard",
	user: "/dashboard",
};

export function useHandleLoginSuccess() {
	const { setAuth } = useAuth();
	const navigate = useNavigate();

	const handleLoginSuccess = (data: LoginResponse) => {
		setAuth(data.authentication);
		console.log("Login succeeded:", data);
		const role: UserTypes | undefined = data.userType;
		if (role && role in roleRoutes) {
			navigate(roleRoutes[role]);
		} else {
			navigate("/");
		}
	};

	return handleLoginSuccess;
}
