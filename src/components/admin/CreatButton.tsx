import { CirclePlus } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { Button } from "../ui/button";

type ButtonVariant = ComponentProps<typeof Button>["variant"];

interface CreateButtonProps {
	label: string;
	onClick: () => void;
	icon?: ReactNode;
	variant?: ButtonVariant;
}

function CreateButton({
	label,
	onClick,
	icon = <CirclePlus className="mr-2 h-4 w-4" />,
	variant = "ghost",
}: CreateButtonProps) {
	return (
		<Button onClick={onClick} variant={variant} className="cursor-pointer">
			{icon}
			Create {label}
		</Button>
	);
}

export default CreateButton;
