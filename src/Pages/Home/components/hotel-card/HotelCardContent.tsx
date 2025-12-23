import type React from "react";

// import { CardContent } from '@/components/ui/card';

interface Props {
	children: React.ReactNode;
	className?: string;
}

export const HotelCardContent: React.FC<Props> = ({ children, className }) => {
	return <div className={`flex-1 flex flex-col p-4 ${className ?? ""}`}>{children}</div>;
};
