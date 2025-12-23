import { CURRENCY } from "@/constants/storage";
export const HotelOriginalPrice = ({ children }: { children: React.ReactNode }) => (
	<span className="line-through text-sm text-muted-foreground">
		{CURRENCY}
		{children}
	</span>
);
