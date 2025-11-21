import { toast } from "sonner";

let isInitialized = false;
let toastId: string | number | undefined;

export const initNetworkMonitor = () => {
	// Prevent duplicate listeners if called multiple times
	if (isInitialized) return;

	const handleOffline = () => {
		// Dismiss any existing toast to avoid duplicates
		if (toastId) toast.dismiss(toastId);
		toastId = toast.error("You are offline", { duration: Infinity });
	};

	const handleOnline = () => {
		// Dismiss offline toast
		if (toastId) toast.dismiss(toastId);
		toastId = toast.info("You are back online", { duration: 3000 });
	};

	window.addEventListener("offline", handleOffline);
	window.addEventListener("online", handleOnline);

	isInitialized = true;

	// Return cleanup function
	return () => {
		window.removeEventListener("offline", handleOffline);
		window.removeEventListener("online", handleOnline);
		if (toastId) toast.dismiss(toastId);
		isInitialized = false;
	};
};
