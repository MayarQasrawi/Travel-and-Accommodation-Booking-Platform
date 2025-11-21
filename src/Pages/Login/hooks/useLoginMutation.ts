import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { LoginAPI } from "../API";
import type { LoginPayload, LoginResponse } from "../API/types";
import { useHandleLoginSuccess } from "./useHandleLoginSuccess";

export const useLoginMutation = () => {
	return useMutation<LoginResponse, AxiosError, LoginPayload>({
		mutationFn: async (payload: LoginPayload) => {
			const res = await LoginAPI(payload);
			return res.data as LoginResponse;
		},

		onError: (error: unknown) => {
			console.error("Login failed:", error);
		},

		onSuccess: useHandleLoginSuccess(),
	});
};
