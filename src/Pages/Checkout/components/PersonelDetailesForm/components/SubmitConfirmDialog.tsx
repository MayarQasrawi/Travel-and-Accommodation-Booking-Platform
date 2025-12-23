import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface SubmitConfirmDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	onConfirm: () => void;
	isSubmitting: boolean;
}

export function SubmitConfirmDialog({ open, onOpenChange, onConfirm, isSubmitting }: SubmitConfirmDialogProps) {
	return (
		<AlertDialog
			open={open}
			onOpenChange={(nextOpen) => {
				if (isSubmitting) return;
				onOpenChange(nextOpen);
			}}
		>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Confirm Booking</AlertDialogTitle>
					<AlertDialogDescription className="font-medium">
						Please confirm that all your details are correct before proceeding. Once submitted, this booking cannot be
						changed.
					</AlertDialogDescription>
				</AlertDialogHeader>

				<AlertDialogFooter>
					<AlertDialogCancel disabled={isSubmitting}>Review</AlertDialogCancel>

					<AlertDialogAction onClick={onConfirm} disabled={isSubmitting}>
						{isSubmitting ? "Processing..." : "Confirm & Submit"}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}
