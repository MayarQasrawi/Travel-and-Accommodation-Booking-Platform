import type React from "react";
import ErrorPage from "./Errorpage";

const Unauthorized: React.FC = () => {
	return <ErrorPage code="401" title="Unauthorized" message="You don't have permission to access this page." />;
};

export default Unauthorized;
