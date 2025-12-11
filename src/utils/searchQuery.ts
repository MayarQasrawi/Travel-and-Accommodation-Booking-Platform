import type { SearchForm } from "@/Pages/Home/components/SearchBar/MainSearchBar";
import { FORM } from "@/Pages/Home/components/SearchBar/MainSearchBar";

export function parseSearchParams(params: URLSearchParams): SearchForm {
	return {
		query: params.get("query") || "",
		checkIn: params.get("checkIn") ? new Date(params.get("checkIn")!) : FORM.checkIn,

		checkOut: params.get("checkOut") ? new Date(params.get("checkOut")!) : FORM.checkOut,

		adults: Number(params.get("adults") || FORM.adults),
		children: Number(params.get("children") || FORM.children),
		rooms: Number(params.get("rooms") || FORM.rooms),
	};
}

export const buildSearchQuery = (form: SearchForm) => {
	return new URLSearchParams({
		query: form.query,
		checkIn: form.checkIn.toISOString(),
		checkOut: form.checkOut.toISOString(),
		adults: String(form.adults),
		children: String(form.children),
		rooms: String(form.rooms),
	}).toString();
};

export const navigateWithSearchParams = (form: SearchForm, navigate: any) => {
	const qs = buildSearchQuery(form);
	navigate(`/search-results?${qs}`, { replace: true });
};
