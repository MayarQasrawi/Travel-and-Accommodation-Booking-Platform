import type React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const HotelCardTitle: React.FC<Props> = ({ children, className }) => {
	return <h3 className={`text-lg font-semibold mb-1 ${className ?? ""}`}>{children}</h3>;
};
