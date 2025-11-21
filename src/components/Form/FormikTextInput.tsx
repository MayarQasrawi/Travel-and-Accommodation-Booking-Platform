import { useField } from "formik";
import type React from "react";
import BaseInput from "../inputs/BaseInput";
import FormError from "./FormError";

interface FormikInputProps {
	label: string;
	name: string;
	type?: string;
	placeholder?: string;
	addon?: React.ReactNode;
}

export const FormikInput: React.FC<FormikInputProps> = ({ name, ...props }) => {
	const [field, meta] = useField(name);
	const hasError = meta.touched && meta.error;

	return (
		<div className="space-y-2">
			<BaseInput {...props} value={field.value} onChange={field.onChange(field.name)} />
			<FormError message={hasError ? meta.error : ""} />
		</div>
	);
};

export default FormikInput;
