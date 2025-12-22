import type React from "react";
import type { PropsWithChildren } from "react";
import type Logo from "@/components/common/Logo";

export interface ContentProps {
	title?: string;
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

export interface Image {
	className?: string;
}

export type AuthLayoutComponent = React.FC<PropsWithChildren> & {
	Brand: React.FC<PropsWithChildren>;
	Logo: React.FC<React.ComponentProps<typeof Logo>>;
	Image: React.FC<Image>;
	Content: React.FC<ContentProps>;
	Footer: React.FC<FooterProps>;
	Form: React.FC<PropsWithChildren>;
	FormTitle: React.FC<FormTitleProps>;
};
