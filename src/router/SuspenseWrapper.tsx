import { type ReactNode, Suspense } from "react";
import { Loader } from "@/components/common/Loader/Loader";

interface Props {
	children: ReactNode;
}

export function SuspenseWrapper({ children }: Props) {
	return <Suspense fallback={<Loader />}>{children}</Suspense>;
}

import type { ReactElement } from "react";

export const withSuspense = (element: ReactElement) => <SuspenseWrapper>{element}</SuspenseWrapper>;
