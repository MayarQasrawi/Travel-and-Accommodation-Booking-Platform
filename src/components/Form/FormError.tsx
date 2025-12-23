import type React from "react";

interface FormErrorProps {
	message?: string;
}

export const FormError: React.FC<FormErrorProps> = ({ message }) => {
	if (!message) return null;

	return <div className="text-sm text-destructive text-left">{message}</div>;
};

export default FormError;
