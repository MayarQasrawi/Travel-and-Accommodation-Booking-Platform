import type { PropsWithChildren } from "react";

interface FormSectionProps {
	title: string;
	contentClassName?: string;
}

function FormSection({ title, children, contentClassName }: PropsWithChildren<FormSectionProps>) {
	return (
		<section>
			<h2 className="text-lg font-semibold mb-4">{title}</h2>
			<div className={contentClassName}>{children}</div>
		</section>
	);
}

export default FormSection;
