import { ShoppingCart } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Loader } from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/constants/routes";
import { FullscreenGallery } from "@/Pages/Hotel/components/FullscreenGallery";
import { HotelInfo } from "@/Pages/Hotel/components/HotelInfo/HotelInfo";
import { ImageGallery } from "@/Pages/Hotel/components/ImageGallery/ImageGallery";
import { ReviewsList } from "@/Pages/Hotel/components/ReviewsList";
import { RoomCard } from "@/Pages/Hotel/components/RoomCard";
import { useHotelData } from "@/Pages/Hotel/hooks/useHotelData";
import { useCartStore } from "@/store/cartStore";
import type { Room } from "@/types/hotel";
import HotelInfoTitle from "./components/HotelInfo/HotelInfoTitle";
import { HotelMap } from "./components/HotelMap";

export default function HotelPage() {
	const { hotelId } = useParams<{ hotelId: string }>();
	const location = useLocation();
	const navigate = useNavigate();
	const { hotel, rooms, reviews, images, isLoading, gallery } = useHotelData(hotelId || "");
	const { addToCart } = useCartStore();

	// Get check-in and check-out dates from location state or URL params
	const getDateParams = () => {
		const params = new URLSearchParams(location.search);
		const checkInDateParam = params.get("checkInDate");
		const checkOutDateParam = params.get("checkOutDate");
		const checkInDate = checkInDateParam ? new Date(checkInDateParam) : new Date();
		const checkOutDate = checkOutDateParam
			? new Date(checkOutDateParam)
			: new Date(new Date().setDate(new Date().getDate() + 1));
		return { checkInDate, checkOutDate };
	};

	const { checkInDate, checkOutDate } = getDateParams();
	const handleAddToCart = (room: Room) => {
		if (!hotel) return;
		addToCart(room, hotel, checkInDate, checkOutDate, room.price);
		navigate(ROUTES.USER.CART_REVIEW);
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
		<div className="container mx-auto p-10  grid grid-cols-1 md:grid-cols-3 gap-8">
			<div className="space-y-8 border-2 rounded p-4 bg-accent">
				<HotelInfo hotel={hotel} />
				{reviews && reviews.length > 0 && <ReviewsList reviews={reviews} />}
				<section>
					<HotelInfoTitle>Location</HotelInfoTitle>
					<HotelMap
						hotel={{
							lat: hotel.latitude,
							lng: hotel.longitude,
							hotelName: hotel.hotelName,
						}}
						// attractions={hotel.attractions ?? []}
					/>
				</section>
			</div>

			<div className="md:col-span-2 space-y-8">
				{images.length > 0 && <ImageGallery images={images} alt={hotel.hotelName} onImageClick={gallery.openGallery} />}

				{rooms && rooms.length > 0 && (
					<>
						<h2 className="text-2xl font-bold mb-4">Available Rooms</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{rooms.map((room) => (
								<RoomCard
									key={room.roomId}
									room={room}
									actions={
										<Button onClick={() => handleAddToCart(room)} disabled={!room.availability} className="gap-2">
											<ShoppingCart size={18} />
											Add to Cart
										</Button>
									}
								/>
							))}
						</div>
					</>
				)}
			</div>

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
