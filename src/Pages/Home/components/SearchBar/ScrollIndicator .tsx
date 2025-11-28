import { cn } from "@/lib/utils"; // or your classname utility

interface ScrollIndicatorProps {
	className?: string;
	color?: string;
}

const ScrollIndicator = ({ className, color = "primary-foreground" }: ScrollIndicatorProps) => {
	return (
		<div className={cn("text-center mt-12", className)}>
			<div className="animate-bounce">
				<div className={cn("w-6 h-10 border-2 rounded-full inline-flex justify-center", `border-${color}`)}>
					<div className={cn("w-1 h-3 rounded-full mt-2", `bg-${color}`)}></div>
				</div>
			</div>
		</div>
	);
};

export default ScrollIndicator;
