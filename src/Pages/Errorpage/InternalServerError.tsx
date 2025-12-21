import type React from "react";
import ErrorPage from "./Errorpage";

const InternalServerError: React.FC = () => {
	return (
		<ErrorPage
			code="500"
			title="Internal Server Error"
			message="Something went wrong on our end. Please try again later."
		/>
	);
};

export default InternalServerError;
