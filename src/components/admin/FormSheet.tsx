import type { FormikHelpers } from "formik";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface FormSheetProps<FormValues> {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description?: string;
	initialValues: FormValues;
	onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
	onCancel?: () => void;
	FormComponent: React.ComponentType<{
		initialValues: FormValues;
		onSubmit: (values: FormValues, helpers: FormikHelpers<FormValues>) => void;
		onCancel: () => void;
	}>;
}

export function FormSheet<FormValues>({
	open,
	onOpenChange,
	title,
	description,
	initialValues,
	onSubmit,
	onCancel,
	FormComponent,
}: FormSheetProps<FormValues>) {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent className="sm:max-w-[500px] p-6">
				<SheetHeader>
					<SheetTitle className="text-2xl">{title}</SheetTitle>
					{description && <SheetDescription>{description}</SheetDescription>}
				</SheetHeader>

				<FormComponent
					initialValues={initialValues}
					onSubmit={onSubmit}
					onCancel={onCancel ?? (() => onOpenChange(false))}
				/>
			</SheetContent>
		</Sheet>
	);
}
