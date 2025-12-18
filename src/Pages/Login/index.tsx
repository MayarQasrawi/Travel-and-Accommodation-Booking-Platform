import type React from "react";
import { AuthLayout, Brand, Footer, Form, FormTitle, Image, Logo } from "@/components/Layout/AuthLayout";

import LoginForm from "./components/LoginForm";

const LoginPage: React.FC = () => {
	return (
		<AuthLayout>
			<Brand>
				<Logo />
				<Image />
				<Footer />
			</Brand>
			<Form>
				<FormTitle title="Sign In" subtitle="Enter your credentials to access your account" />
				<LoginForm />
			</Form>
		</AuthLayout>
	);
};

export default LoginPage;
