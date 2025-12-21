import type { PropsWithChildren } from "react";
import { useCallback, useEffect, useState } from "react";
import { TOKEN_KEY, USER_KEY } from "@/constants/storage";
import { setAuthHeader } from "@/services/axios";
import type { User } from "@/types/user";
import { decodeToken } from "@/utils/jwt";
import { AuthContext } from "./context";

export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	const logout = useCallback(() => {
		localStorage.removeItem(TOKEN_KEY);
		setAuthHeader(null);
		setUser(null);
	}, []);

	const setAuth = useCallback(
		(token: string | null) => {
			if (!token) {
				logout();
				return;
			}

			const decoded = decodeToken(token);
			if (!decoded) {
				logout();
				return;
			}

			localStorage.setItem(TOKEN_KEY, token);
			localStorage.setItem(USER_KEY, JSON.stringify(decoded));
			setAuthHeader(token);
			setUser(decoded);
		},
		[logout],
	);

	useEffect(() => {
		const token = localStorage.getItem(TOKEN_KEY);
		const userData = localStorage.getItem(USER_KEY);
		if (userData) {
			setUser(JSON.parse(userData));
		}
		if (token) {
			setAuth(token);
		}
		setIsLoading(false);
	}, [setAuth]);

	return (
		<AuthContext.Provider value={{ user, isLoading, isAuthenticated: !!user, setAuth, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
