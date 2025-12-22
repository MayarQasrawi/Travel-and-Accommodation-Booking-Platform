import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AuthProvider } from "@/context/AuthContext";
import { initNetworkMonitor } from "@/services/networkMonitor";
import { queryClient } from "@/services/queryClient";
import { TravioSplash } from "./components/common/TravioSlash.tsx/TravioSplash";

export const Providers = ({ children }: PropsWithChildren) => {
	useEffect(() => {
		const cleanup = initNetworkMonitor();
		return cleanup;
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<TravioSplash />
				{children}
				<Toaster position="bottom-right" richColors />
			</AuthProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default Providers;
