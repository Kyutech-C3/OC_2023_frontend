import React from "react";
import { TopLoading } from "../TopLoading/TopLoading";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TopLoading />
            <>{children}</>
        </>
    );
}
