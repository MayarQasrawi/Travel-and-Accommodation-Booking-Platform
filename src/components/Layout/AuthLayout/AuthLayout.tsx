import type { PropsWithChildren } from "react";
import imgs from "@/assets/images/world-map-4460639_1280.png";
import Logo from "@/components/common/Logo";
import { APP_NAME } from "@/constants/storage";
// import Lottie from 'lottie-react';
// import img from '@/assets/animation/Welcome.json';
import type { ContentProps, FooterProps, FormTitleProps, LottieAnimationProps } from "./types";

const AuthLayout = ({ children }: PropsWithChildren) => {
	return <main className="flex flex-col md:flex-row min-h-screen">{children}</main>;
};

AuthLayout.Brand = ({ children }: PropsWithChildren) => {
	return (
		<aside className="hidden md:flex w-full md:w-1/2 bg-primary text-primary-foreground p-8 lg:p-12 flex-col justify-around">
			{children}
		</aside>
	);
};

AuthLayout.Logo = () => {
	return <Logo />;
};

AuthLayout.Animation = ({
	// animationData = img,
	className = "w-full max-w-lg mx-auto md:max-w-full ",
}: // loop = true,
// autoplay = true
LottieAnimationProps) => {
	return (
		<figure className={className}>
			{/* <Lottie animationData={animationData} loop={loop} autoplay={autoplay} /> */}
			<img src={imgs} alt="Travel Auth" />
		</figure>
	);
};

AuthLayout.Content = ({ title, description }: ContentProps) => {
	return (
		<section className="flex-1 flex flex-col justify-center max-w-xl p-6 md:p-12">
			<h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">{title}</h1>
			<p className="text-lg md:text-xl opacity-90">{description}</p>
		</section>
	);
};

AuthLayout.Footer = ({ copyright = `© ${new Date().getFullYear()} ${APP_NAME}`, privacyLink }: FooterProps) => {
	return (
		<footer className="flex flex-col md:flex-row items-center justify-between text-sm opacity-80 mt-6 md:mt-12">
			<span>{copyright}</span>
			<a href={privacyLink} className="hover:opacity-100 transition-opacity" rel="noopener noreferrer">
				Privacy Policy
			</a>
		</footer>
	);
};

AuthLayout.Form = ({ children }: PropsWithChildren) => {
	return (
		<section className="w-full md:w-1/2 bg-muted flex items-center justify-center p-6 sm:p-8 md:p-12 min-h-screen">
			<div className="w-full max-w-md sm:max-w-sm md:max-w-md">{children}</div>
		</section>
	);
};

AuthLayout.FormTitle = ({ title, subtitle }: FormTitleProps) => {
	return (
		<header className="mb-6 md:mb-8 text-center md:text-left">
			<h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3 ">{title}</h1>
			{subtitle && <p className="text-sm md:text-base text-muted-foreground">{subtitle}</p>}
		</header>
	);
};

export default AuthLayout;
