import type { FC } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "../common/Loader";

interface FormFooterProps {
	onCancel: () => void;
	isSubmitting: boolean;
	submitLabel?: string;
	cancelLabel?: string;
}

const FormFooter: FC<FormFooterProps> = ({
	onCancel,
	isSubmitting,
	submitLabel = "Submit",
	cancelLabel = "Cancel",
}) => {
	return (
		<div className="flex justify-end gap-3">
			<Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
				{cancelLabel}
			</Button>

			<Button type="submit" disabled={isSubmitting}>
				{isSubmitting && <Loader />}
				{submitLabel}
			</Button>
		</div>
	);
};

export default FormFooter;
