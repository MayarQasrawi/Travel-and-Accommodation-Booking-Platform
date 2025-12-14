import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
	direction: "left" | "right";
	onClick: () => void;
}

function NavigationButton({ direction, onClick }: NavigationButtonProps) {
	const isLeft = direction === "left";
	const Icon = isLeft ? ChevronLeft : ChevronRight;
	const positionClass = isLeft ? "left-0" : "right-0";
	const gradientClass = isLeft ? "bg-gradient-to-r" : "bg-gradient-to-l";

	return (
		<Button
			type="button"
			className={`absolute ${positionClass} top-0 h-full px-3 flex items-center 
                       ${gradientClass} from-black/40 to-transparent text-white
                       opacity-0 group-hover:opacity-100 transition-opacity z-10`}
			onClick={onClick}
		>
			variant="link"
			<Icon size={28} />
		</Button>
	);
}

export default NavigationButton;
