import { Facebook, Instagram, Twitter } from "lucide-react";
import Logo from "@/components/common/Logo";
import { DotPattern } from "@/components/Pattern/DotPattern";

export default function Footer() {
	const quickLinks = ["About Us", "Destinations", "Special Offers", "Contact"];
	const supportLinks = ["Help Center", "Privacy Policy", "Terms of Service", "FAQs"];
	const bottomLinks = ["Privacy", "Terms", "Sitemap"];

	const socialIcons = [
		{ icon: Facebook, href: "/facebook" },
		{ icon: Twitter, href: "/twitter" },
		{ icon: Instagram, href: "/instagram" },
	];

	return (
		<footer className="relative bg-primary overflow-hidden border-t border-primary-foreground/10">
			<DotPattern />

			<div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
					<section className="lg:col-span-2">
						<Logo className="text-primary-foreground mb-2" />
						<p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
							Your trusted companion for discovering and booking the perfect accommodations worldwide. Experience
							seamless travel planning with exclusive deals.
						</p>

						<div className="flex gap-4">
							{socialIcons.map(({ icon: Icon, href }) => (
								<a
									key={href}
									href={href}
									className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 
                             rounded-lg flex items-center justify-center transition-colors"
								>
									<Icon className="w-5 h-5 text-primary-foreground" />
								</a>
							))}
						</div>
					</section>

					<FooterLinkSection title="Quick Links" links={quickLinks} />

					<FooterLinkSection title="Support" links={supportLinks} />
				</div>

				<div className="pt-8 border-t border-primary-foreground/10">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-primary-foreground/70 text-sm text-center md:text-left">
							© {new Date().getFullYear()} Travio. All rights reserved. Created by Mayar Qasarwa
						</p>

						<nav className="flex gap-6 text-sm">
							{bottomLinks.map((link) => (
								<a
									key={link}
									href={`/${link.toLowerCase()}`}
									className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
								>
									{link}
								</a>
							))}
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
}

interface FooterLinkSectionProps {
	title: string;
	links: string[];
}

export function FooterLinkSection({ title, links }: FooterLinkSectionProps) {
	return (
		<nav>
			<h4 className="text-lg font-semibold text-primary-foreground mb-4">{title}</h4>

			<ul className="space-y-3">
				{links.map((link) => (
					<li key={link}>
						<a
							href={`/${link.toLowerCase().replace(/ /g, "-")}`}
							className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
						>
							{link}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
