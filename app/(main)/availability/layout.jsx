import FallbackUI from "@/components/fallbackUi";
import { Suspense } from "react";

export default function AvailabilityLayout({ children }) {
    return (
        <Suspense fallback={<div><FallbackUI /></div>}>
            {children}
        </Suspense>
    )
}