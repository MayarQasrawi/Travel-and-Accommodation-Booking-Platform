export const ROUTES = {
	LOGIN: "/",

	ADMIN: {
		BASE: "/admin",
		CITIES: "/admin/cities",
		HOTELS: "/admin/hotels",
		ROOMS: "/admin/rooms",
	},
	USER: {
		BASE: "/user",
		HOME: "/user/",
		SEARCH_RESULTS: "/user/search-results/",
		hotelDetail: (hotelId: string | number) => `/user/hotel/${hotelId}`,
	},

	NOT_FOUND: "*",
} as const;

export const AUTH_ROUTES = ROUTES.LOGIN;
export const ADMIN_ROUTES = ROUTES.ADMIN;
export const USER_ROUTES = ROUTES.USER;
