import type { PropsWithChildren } from "react";

function HotelInfoTitle({ children }: PropsWithChildren) {
	return <h2 className="text-lg md:text-xl font-bold mb-2"> {children}</h2>;
}

export default HotelInfoTitle;
