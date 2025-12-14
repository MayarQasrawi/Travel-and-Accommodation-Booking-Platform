import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60_000,
			retry: (failureCount, error: any) => {
				// Don't retry on 4xx errors
				if (error?.code >= 400 && error?.code < 500) return false;
				return failureCount < 2;
			},
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		},
		mutations: {
			retry: (failureCount, error: any) => {
				if (error?.code >= 400 && error?.code < 500) return false;
				return failureCount < 1;
			},
		},
	},

	queryCache: new QueryCache({
		onError: (error) => {
			console.log("Query Error:", error);

			toast.error(error.message || "Something went wrong");
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			console.log("Mutation Error:", error);
			toast.error(error.message || "Mutation failed");
		},
		onSuccess: () => {
			toast.success("Successful");
		},
	}),
});
