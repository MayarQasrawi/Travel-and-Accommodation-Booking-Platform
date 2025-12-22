import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmptyState from "@/components/common/EmptyStateWithIcon";

function EmptyCart() {
	const navigate = useNavigate();

	return (
		<EmptyState
			icon={Plane}
			title="No bookings yet"
			description="Start planning your next adventure"
			actionLabel="Explore Destinations"
			onAction={() => navigate(-1)}
		/>
	);
}

export default EmptyCart;
