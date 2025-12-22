interface ThumbnailButtonProps {
	src: string;
	alt: string;
	isActive: boolean;
	onClick: () => void;
}

function ThumbnailButton({ src, alt, isActive, onClick }: ThumbnailButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`relative shrink-0 w-24 h-20 rounded overflow-hidden 
                      border-3 transition-all
                      ${isActive ? "border-primary" : "border-transparent opacity-50 hover:opacity-100"}`}
		>
			<img src={src} alt={alt} className="w-full h-full object-cover" />
		</button>
	);
}

export default ThumbnailButton;
