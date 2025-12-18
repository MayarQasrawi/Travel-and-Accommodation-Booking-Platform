import { ROUTES } from "@/constants/routes";
import { FORM } from "@/Pages/Home/components/SearchBar/MainSearchBar";
import type { SearchParams } from "@/Pages/Home/hooks/useSearchHotels";

export function parseSearchParams(params: URLSearchParams): SearchParams {
	return {
		city: params.get("city") || "",
		checkInDate: params.get("checkInDate") ? new Date(params.get("checkInDate")!) : FORM.checkInDate,
		checkOutDate: params.get("checkOutDate") ? new Date(params.get("checkOutDate")!) : FORM.checkOutDate,

		adults: Number(params.get("adults") || FORM.adults),
		children: Number(params.get("children") || FORM.children),
		numberOfRooms: Number(params.get("numberOfRooms") || FORM.numberOfRooms),
	};
}

export const buildSearchQuery = (form: SearchParams) => {
	const params = new URLSearchParams();
	if (form.city) params.set("city", form.city);
	if (form.checkInDate) params.set("checkInDate", form.checkInDate.toISOString());
	if (form.checkOutDate) params.set("checkOutDate", form.checkOutDate.toISOString());
	if (form.adults !== undefined) params.set("adults", String(form.adults));
	if (form.children !== undefined) params.set("children", String(form.children));
	if (form.numberOfRooms !== undefined) params.set("numberOfRooms", String(form.numberOfRooms));
	return params.toString();
};

export const navigateWithSearchParams = (form: SearchParams, navigate: any) => {
	const qs = buildSearchQuery(form);
	navigate(`${ROUTES.USER.SEARCH_RESULTS}?${qs}`);
};
