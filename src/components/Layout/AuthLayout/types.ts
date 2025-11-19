import type { AnimationItem } from "lottie-web";
export interface ContentProps {
	title: string;
	description: string;
}

export interface FooterProps {
	copyright?: string;
	privacyLink?: string;
}

export interface FormTitleProps {
	title: string;
	subtitle?: string;
}

export interface LottieAnimationProps {
	animationData?: AnimationItem;
	className?: string;
	loop?: boolean;
	autoplay?: boolean;
}
