import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60_000,
			retry: 1,
			refetchOnWindowFocus: false,
			refetchOnReconnect: true,
		},
		mutations: {
			retry: 1,
		},
	},

	queryCache: new QueryCache({
		onError: (error, query) => {
			console.log("Query Error:", error);
			if (query.state.data !== undefined) {
				toast.error(error.message || "Something went wrong");
			}
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			console.log("Mutation Error:", error);
			toast.error(error.message || "Mutation failed");
		},
		onSuccess: () => {
			toast.success("Operation successful");
		},
	}),
});
