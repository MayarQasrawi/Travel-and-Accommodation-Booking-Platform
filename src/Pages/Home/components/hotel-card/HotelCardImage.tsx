import type React from "react";

interface Props {
	src: string;
	alt: string;
	className?: string;
}
export const HotelCardImage: React.FC<Props> = ({ src, alt, className }) => (
	<figure className="relative w-full h-48 overflow-hidden group">
		<img
			src={src}
			alt={alt}
			className={`h-full w-full object-cover transition-all duration-300 group-hover:scale-110 ${className}`}
			loading="lazy"
		/>
		<div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/20" />
	</figure>
);
