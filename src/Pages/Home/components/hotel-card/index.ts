import { HotelBadge } from "./HotelBadge";
import { HotelCard } from "./HotelCard";
import { HotelCardAmenities } from "./HotelCardAmenities";
import { HotelCardContent } from "./HotelCardContent";
import { HotelCardImage } from "./HotelCardImage";
import { HotelCardLocation } from "./HotelCardLocation";
import { HotelCardRating } from "./HotelCardRating";
import { HotelCardTitle } from "./HotelCardTitle";
import { HotelMetaInfo } from "./HotelMetaInfo";
import { HotelDiscountedPrice } from "./price/HotelDiscountedPrice";
import { HotelOriginalPrice } from "./price/HotelOriginalPrice";
import { HotelPrice } from "./price/HotelPrice";

export const Card = Object.assign(HotelCard, {
	Image: HotelCardImage,
	Content: HotelCardContent,
	Title: HotelCardTitle,
	Price: HotelPrice,
	DiscountedPrice: HotelDiscountedPrice,
	OriginalPrice: HotelOriginalPrice,
	Amenities: HotelCardAmenities,
	Info: HotelMetaInfo,
	Badge: HotelBadge,
	Location: HotelCardLocation,
	Rating: HotelCardRating,
});
