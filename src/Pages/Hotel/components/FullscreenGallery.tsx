import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface FullscreenGalleryProps {
	images: string[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
	onNavigate: (index: number) => void;
}

export function FullscreenGallery({ images, currentIndex, isOpen, onClose, onNavigate }: FullscreenGalleryProps) {
	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		const handleArrows = (e: KeyboardEvent) => {
			if (e.key === "ArrowLeft") {
				const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
				onNavigate(newIndex);
			} else if (e.key === "ArrowRight") {
				const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
				onNavigate(newIndex);
			}
		};

		if (isOpen) {
			document.addEventListener("keydown", handleEscape);
			document.addEventListener("keydown", handleArrows);
			document.body.style.overflow = "hidden";
		}

		return () => {
			document.removeEventListener("keydown", handleEscape);
			document.removeEventListener("keydown", handleArrows);
			document.body.style.overflow = "";
		};
	}, [isOpen, onClose, onNavigate, currentIndex, images.length]);

	if (!isOpen) return null;

	const navigate = (direction: "prev" | "next") => {
		const newIndex =
			direction === "prev"
				? currentIndex === 0
					? images.length - 1
					: currentIndex - 1
				: currentIndex === images.length - 1
					? 0
					: currentIndex + 1;
		onNavigate(newIndex);
	};

	return (
		<div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
			<Button
				variant="ghost"
				size="icon"
				className="absolute top-4 right-4 text-white hover:bg-white/10"
				onClick={onClose}
			>
				<X size={24} />
			</Button>

			<Button
				variant="ghost"
				size="icon"
				className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
				onClick={() => navigate("prev")}
			>
				<ChevronLeft size={32} />
			</Button>

			<img
				src={images[currentIndex]}
				alt={`Fullscreen Hotel-image ${currentIndex + 1}`}
				className="max-w-[90vw] max-h-[90vh] object-contain"
			/>

			<Button
				variant="ghost"
				size="icon"
				className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10"
				onClick={() => navigate("next")}
			>
				<ChevronRight size={32} />
			</Button>

			<div className="absolute bottom-4 text-white text-lg">
				{currentIndex + 1} / {images.length}
			</div>
		</div>
	);
}
