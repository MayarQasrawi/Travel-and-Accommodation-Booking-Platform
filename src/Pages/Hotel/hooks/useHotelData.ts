import { useMemo, useState } from "react";
import { useAvailableRooms, useHotelDetails, useHotelGallery, useHotelReviews } from "./useHotelQueries";

export function useHotelData(hotelId: string) {
	const { data: hotel, isLoading: hotelLoading } = useHotelDetails(hotelId);
	const { data: gallery, isLoading: galleryLoading } = useHotelGallery(hotelId);
	const { data: rooms, isLoading: roomsLoading } = useAvailableRooms(hotelId);
	const { data: reviews, isLoading: reviewsLoading } = useHotelReviews(hotelId);

	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	const openGallery = (index: number = 0) => {
		setSelectedImageIndex(index);
		setIsGalleryOpen(true);
	};

	const closeGallery = () => setIsGalleryOpen(false);

	const images = useMemo(() => gallery?.map((img) => img.url) || [], [gallery]);

	return {
		hotel,
		rooms,
		reviews,
		images,
		isLoading: hotelLoading || galleryLoading || roomsLoading || reviewsLoading,
		gallery: {
			selectedImageIndex,
			isGalleryOpen,
			openGallery,
			closeGallery,
			setSelectedImageIndex,
		},
	};
}
