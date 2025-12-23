import type React from "react";
import ErrorPage from "./Errorpage";

const PageNotFound: React.FC = () => {
	return <ErrorPage code="404" title="Page Not Found" message="The page you're looking for doesn't exist." />;
};

export default PageNotFound;
