import type React from "react";
import AuthLayout from "@/components/Layout/AuthLayout/AuthLayout";
import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
	return (
		<AuthLayout>
			<AuthLayout.Brand>
				<AuthLayout.Logo />
				<AuthLayout.Animation />
			</AuthLayout.Brand>
			<AuthLayout.Form>
				<AuthLayout.FormTitle title="Sign In" subtitle="Enter your credentials to access your account" />
				<LoginForm />
			</AuthLayout.Form>
		</AuthLayout>
	);
};

export default LoginPage;
