import { useParams } from "react-router-dom";
import { Loader } from "@/components/common/Loader";
import { FullscreenGallery } from "@/Pages/Hotel/components/FullscreenGallery";
import { HotelInfo } from "@/Pages/Hotel/components/HotelInfo/HotelInfo";
import { ImageGallery } from "@/Pages/Hotel/components/ImageGallery/ImageGallery";
import { ReviewsList } from "@/Pages/Hotel/components/ReviewsList";
import { RoomCard } from "@/Pages/Hotel/components/RoomCard";
import { useHotelData } from "@/Pages/Hotel/hooks/useHotelData";
import type { Room } from "@/types/hotel";

export default function HotelPage() {
	const { hotelId } = useParams<{ hotelId: string }>();
	const { hotel, rooms, reviews, images, isLoading, gallery } = useHotelData(hotelId);

	const handleAddToCart = (room: Room) => {
		console.log("Adding to cart:", room);
	};

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<Loader className="w-32 h-32" />
			</div>
		);
	}

	if (!hotel) {
		return (
			<div className="text-center py-20">
				<h2 className="text-2xl font-bold">Hotel not found</h2>
			</div>
		);
	}

	return (
		<div className="container mx-auto p-10 space-y-8 max-w-5xl">
			{/* Gallery Section */}
			{images.length > 0 && <ImageGallery images={images} alt={hotel.hotelName} onImageClick={gallery.openGallery} />}

			<HotelInfo hotel={hotel} />
			{/* Rooms Section */}
			{rooms && rooms.length > 0 && (
				<section>
					<h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{rooms.map((room) => (
							<RoomCard key={room.roomId} room={room} onAddToCart={handleAddToCart} />
						))}
					</div>
				</section>
			)}

			{/* Reviews Section */}
			{reviews && reviews.length > 0 && <ReviewsList reviews={reviews} />}

			{images.length > 0 && (
				<FullscreenGallery
					images={images}
					currentIndex={gallery.selectedImageIndex}
					isOpen={gallery.isGalleryOpen}
					onClose={gallery.closeGallery}
					onNavigate={gallery.setSelectedImageIndex}
				/>
			)}
		</div>
	);
}
