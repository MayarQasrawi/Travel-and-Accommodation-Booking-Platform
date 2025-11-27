import type { ReactNode } from "react";
import { APP_NAME, LOGO } from "@/constants/storage";

interface LogoProps {
	icon?: ReactNode;
	name?: string;
	className?: string;
}
const Logo = ({ icon = <LOGO />, name = APP_NAME, className }: LogoProps) => {
	return (
		<div className={`flex items-center gap-3 ${className}`}>
			{icon && (
				<div
					className="w-12 h-12 bg-background text-primary rounded-lg flex items-center justify-center"
					aria-hidden="true"
				>
					<span className="text-2xl font-bold">{icon}</span>
				</div>
			)}

			{name && <span className="text-2xl font-semibold">{name}</span>}
		</div>
	);
};

export default Logo;
