import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { initNetworkMonitor } from "@/services/networkMonitor";
import { queryClient } from "@/services/queryClient";

export const Providers = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		const cleanup = initNetworkMonitor();
		return cleanup; // Cleanup on unmount
	}, []);

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
