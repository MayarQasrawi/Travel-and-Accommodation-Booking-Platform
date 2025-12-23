import type { ReactElement } from "react";
import { type ReactNode, Suspense } from "react";
import Loading from "@/components/common/Loading";

interface Props {
	children: ReactNode;
}

export function SuspenseWrapper({ children }: Props) {
	return <Suspense fallback={<Loading />}>{children}</Suspense>;
}

export const withSuspense = (element: ReactElement) => <SuspenseWrapper>{element}</SuspenseWrapper>;
