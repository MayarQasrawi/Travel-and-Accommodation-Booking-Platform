import type React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
	code: string;
	title: string;
	message: string;
	buttonText?: string;
	onButtonClick?: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ code, title, message, buttonText = "Go to Home", onButtonClick }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (onButtonClick) {
			onButtonClick();
		} else {
			navigate("/");
		}
	};

	return (
		<main className="min-h-screen flex items-center justify-center bg-accent px-4">
			<section className="text-center border-2 bg-primary-foreground border-dashed p-8 rounded">
				<h1 className="text-6xl font-bold mb-4">{code}</h1>
				<h2 className="text-2xl font-semibold mb-2">{title}</h2>
				<p className="mb-6 text-muted-foreground">{message}</p>
				<Button onClick={handleClick}>{buttonText}</Button>
			</section>
		</main>
	);
};

export default ErrorPage;
