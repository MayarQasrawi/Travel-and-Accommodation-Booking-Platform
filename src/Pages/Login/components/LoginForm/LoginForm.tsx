import type { FormikHelpers } from "formik";
import { Formik } from "formik";
import type { LucideIcon } from "lucide-react";
import { LockIcon, User } from "lucide-react";
import type React from "react";
import Spinner from "@/components/common/spinner";
import { FormError } from "@/components/Form/FormError";
import FormikTextInput from "@/components/Form/FormikTextInput";
import { Button } from "@/components/ui/button";
import type { LoginPayload as LoginValues } from "../../API/types";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { LoginFormSchema } from "./LoginFormSchema";

type LoginFieldConfig = {
	name: keyof LoginValues;
	type: string;
	placeholder: string;
	Icon: LucideIcon;
};
const LOGIN_FIELDS: LoginFieldConfig[] = [
	{ name: "userName", type: "text", placeholder: "Enter your name", Icon: User },
	{ name: "password", type: "password", placeholder: "Enter your password", Icon: LockIcon },
];

const LoginForm: React.FC = () => {
	const initialValues: LoginValues = { userName: "", password: "" };

	const { mutateAsync, error } = useLoginMutation();
	const onSubmit = async (values: LoginValues, { setSubmitting }: FormikHelpers<LoginValues>) => {
		try {
			await mutateAsync(values);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<div className="text-center">
			<Formik initialValues={initialValues} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
				{({ handleSubmit, isSubmitting, isValid, dirty }) => (
					<form onSubmit={handleSubmit} className="space-y-4">
						{LOGIN_FIELDS.map(({ name, type, placeholder, Icon }) => (
							<FormikTextInput
								key={name}
								name={name}
								type={type}
								addon={<Icon size={18} />}
								placeholder={placeholder}
							/>
						))}
						<FormError message={error?.message ?? ""} />
						<Button type="submit" disabled={isSubmitting || !isValid || !dirty} className="w-full">
							{isSubmitting ? (
								<>
									<Spinner className="mr-2 h-4 w-4" />
									Signing in...
								</>
							) : (
								"Sign in"
							)}
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};
export default LoginForm;
