import type React from "react";
import { Badge } from "@/components/ui/badge";

interface Props {
	children: React.ReactNode;
	variant?: "default" | "secondary" | "destructive" | "outline";
	className?: string;
}

export const HotelBadge: React.FC<Props> = ({ children, variant = "destructive", className }) => {
	return (
		<Badge variant={variant} className={`absolute top-2 right-2 ${className ?? ""}`}>
			{children}
		</Badge>
	);
};
