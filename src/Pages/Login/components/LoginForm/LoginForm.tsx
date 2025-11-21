import type { FormikHelpers } from "formik";
import { Formik } from "formik";
import { LockIcon, User } from "lucide-react";
import type React from "react";
import Spinner from "@/components/common/spinner";
import { FormError } from "@/components/Form/FormError";
import FormikTextInput from "@/components/Form/FormikTextInput";
import { Button } from "@/components/ui/button";
import type { LoginPayload as LoginValues } from "../../API/types";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { LoginFormSchema } from "./LoginFormSchema";

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
		<div className=" text-center ">
			<Formik initialValues={initialValues} validationSchema={LoginFormSchema} onSubmit={onSubmit}>
				{({ handleSubmit, isSubmitting, isValid, dirty }) => (
					<form onSubmit={handleSubmit} className="space-y-4">
						<FormikTextInput
							label="User Name"
							name="userName"
							type="text"
							addon={<User size={18} />}
							placeholder="Enter your name"
						/>
						<FormikTextInput
							label="Password"
							name="password"
							type="password"
							addon={<LockIcon size={18} />}
							placeholder="Enter your password"
						/>
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
