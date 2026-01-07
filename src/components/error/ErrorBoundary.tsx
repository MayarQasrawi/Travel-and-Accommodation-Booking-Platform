import { Component, type ReactNode } from "react";
import DefaultErrorPage from "./RouteErrorPage";

type ErrorBoundaryProps = {
	children: ReactNode;
	fallback?: ReactNode;
};

type ErrorBoundaryState = {
	hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	state: ErrorBoundaryState = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: unknown) {
		// Optional: send to logging service (Sentry, etc.)
		console.error("Unhandled runtime error:", error, info);
	}

	render() {
		if (this.state.hasError) {
			return this.props.fallback ?? <DefaultErrorPage />;
		}

		return this.props.children;
	}
}
