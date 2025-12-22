import { lazy } from "react";

/* Auth */
export const LoginPage = lazy(() => import("@/Pages/Login"));

/* Admin */
export const CitiesPage = lazy(() => import("@/Pages/admin/cities"));
export const HotelsPage = lazy(() => import("@/Pages/admin/hotels"));
export const RoomsPage = lazy(() => import("@/Pages/admin/rooms"));

/* User */
export const HomePage = lazy(() => import("@/Pages/Home"));
export const SearchResultsPage = lazy(() => import("@/Pages/SearchResultsPage/SearchResultsPage"));
export const HotelPage = lazy(() => import("@/Pages/Hotel/HotelPage"));
export const CartReviewPage = lazy(() => import("@/Pages/CartReviewPage/CartReviewPage"));
export const CheckoutPage = lazy(() => import("@/Pages/Checkout/CheckoutPage"));
export const ConfirmationPage = lazy(() => import("@/Pages/Confirmation/ConfirmationPage"));
