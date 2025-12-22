import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import ConfirmationDetails from "./components/ConfirmationDetails";

export default function ConfirmationPage() {
	const navigate = useNavigate();

	const handleContinue = () => {
		navigate(ROUTES.USER.BASE);
	};

	return (
		<div className="container mx-auto p-4 md:p-10 max-w-5xl min-h-screen">
			<header className="mb-8 text-center">
				<h1 className="text-4xl font-bold mb-2">Booking Confirmation</h1>
				<p className="text-gray-600">Thank you for completing your reservation</p>
			</header>

			<ConfirmationDetails />

			<div className="mt-8 text-center">
				<Button onClick={handleContinue} className="px-8 py-2">
					Continue
				</Button>
			</div>
		</div>
	);
}
