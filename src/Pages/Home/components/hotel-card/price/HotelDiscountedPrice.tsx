import { CURRENCY } from "@/constants/storage";
export const HotelDiscountedPrice = ({ children }: { children: React.ReactNode }) => (
	<span className="text-xl font-bold ">
		{CURRENCY}
		{children}
	</span>
);
