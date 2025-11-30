import { MapPin } from "lucide-react";
import type React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const HotelCardLocation: React.FC<Props> = ({ children, className }) => {
	return (
		<address className={`not-italic text-sm text-muted-foreground mb-2 flex items-center gap-1 ${className ?? ""}`}>
			<MapPin className="w-4 h-4" />
			{children}
		</address>
	);
};
