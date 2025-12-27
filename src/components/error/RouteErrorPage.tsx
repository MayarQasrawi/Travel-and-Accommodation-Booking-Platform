import { useRouteError } from "react-router-dom";
import ErrorPage from "@/Pages/Errorpage";

export default function RouteErrorPage() {
	const error = useRouteError() as Error;

	return (
		<ErrorPage
			code="500"
			title="Something went wrong"
			message={error?.message || "An unexpected error occurred."}
			buttonText="Go Home"
		/>
	);
}
