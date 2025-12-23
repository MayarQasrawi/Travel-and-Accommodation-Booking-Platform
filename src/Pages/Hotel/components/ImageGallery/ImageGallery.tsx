import { Maximize2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import NavigationButton from "./NavigationButton";
import ThumbnailButton from "./ThumbnailButton";

interface ImageGalleryProps {
	images: string[];
	alt: string;
	onImageClick?: (index: number) => void;
}

export function ImageGallery({ images, alt, onImageClick }: ImageGalleryProps) {
	const [currentIndex, setCurrentIndex] = useState(0);

	if (images.length === 0) {
		return;
	}

	const navigate = (step: number) => {
		setCurrentIndex((prev) => (prev + step + images.length) % images.length);
	};

	const hasMultipleImages = images.length > 1;

	return (
		<section className="w-full space-y-3">
			<div className="relative h-[350px] sm:h-[420px] rounded overflow-hidden group">
				<img
					src={images[currentIndex]}
					alt={`${alt} Hotel-Image ${currentIndex + 1}`}
					className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
				/>

				{onImageClick && (
					<Button
						variant="secondary"
						size="icon"
						className="absolute top-3 right-4 bg-white/80 backdrop-blur-sm hover:bg-white z-20"
						onClick={() => onImageClick(currentIndex)}
					>
						<Maximize2 size={18} />
					</Button>
				)}

				{hasMultipleImages && (
					<>
						<NavigationButton direction="left" onClick={() => navigate(-1)} />
						<NavigationButton direction="right" onClick={() => navigate(1)} />
					</>
				)}
			</div>

			{hasMultipleImages && (
				<div className="flex gap-3 overflow-x-auto pb-2">
					{images.map((img, idx) => (
						<ThumbnailButton
							key={idx}
							src={img}
							alt={`${alt} thumbnail ${idx + 1}`}
							isActive={idx === currentIndex}
							onClick={() => setCurrentIndex(idx)}
						/>
					))}
				</div>
			)}
		</section>
	);
}
