import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";

const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error, query) => {
			// Handle failed background refetches
			if (query.state.data !== undefined) {
				toast.error(error.message || "Something went wrong");
			}
		},
	}),
	mutationCache: new MutationCache({
		onError: (error) => {
			toast.error(error.message || "Mutation failed");
		},
		onSuccess: () => {
			toast.success("Operation successful");
		},
	}),
});

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				{children}
				<Toaster position="top-right" richColors />
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default Providers;
