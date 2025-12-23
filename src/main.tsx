import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { RouterProvider } from "react-router-dom";
import Providers from "@/Providers.tsx";
import router from "@/router";
import "leaflet/dist/leaflet.css";

// biome-ignore lint/style/noNonNullAssertion: Root is present in index.html
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	</StrictMode>,
);
