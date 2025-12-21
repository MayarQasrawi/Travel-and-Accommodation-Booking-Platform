interface LoadingProps {
	size?: "sm" | "md" | "lg";
	fullScreen?: boolean;
}

const sizeMap = {
	sm: "w-2 h-2",
	md: "w-3 h-3",
	lg: "w-4 h-4",
};

export default function Loading({ size = "md", fullScreen = true }: LoadingProps) {
	return (
		<div className={`flex items-center justify-center ${fullScreen ? "min-h-screen bg-background" : ""}`}>
			<div className="flex gap-2">
				<span className={`${sizeMap[size]} rounded-full bg-primary animate-bounce [animation-delay:0ms]`} />
				<span className={`${sizeMap[size]} rounded-full bg-primary animate-bounce [animation-delay:150ms]`} />
				<span className={`${sizeMap[size]} rounded-full bg-primary animate-bounce [animation-delay:300ms]`} />
				<span className={`${sizeMap[size]} rounded-full bg-primary animate-bounce [animation-delay:450ms]`} />
			</div>
		</div>
	);
}
