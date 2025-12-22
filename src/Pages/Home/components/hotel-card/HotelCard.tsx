import type React from "react";

interface HotelCardProps {
	children: React.ReactNode;
	className?: string;
}

export const HotelCard: React.FC<HotelCardProps> = ({ children, className = "" }) => {
	return (
		<section
			className={`overflow-hidden hover:shadow-lg transition-shadow ${className} bg-primary-foreground rounded border-2 `}
		>
			<article className="flex flex-col h-full ">{children}</article>
		</section>
	);
};
