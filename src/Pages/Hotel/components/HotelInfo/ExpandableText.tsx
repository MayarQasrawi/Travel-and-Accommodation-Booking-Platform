import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ExpandableTextProps {
	text: string;
}

export function ExpandableText({ text }: ExpandableTextProps) {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className="space-y-1">
			<div
				className={expanded ? "text-muted-foreground" : " text-muted-foreground line-clamp-2 relative overflow-hidden"}
			>
				{text}
			</div>
			{text.length > 120 && (
				<Button
					variant="link"
					className="p-0 h-auto font-medium text-primary "
					onClick={() => setExpanded((prev) => !prev)}
				>
					{expanded ? "Show Less" : "Read More"}
				</Button>
			)}
		</div>
	);
}
