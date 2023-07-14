import React from "react";
import { TopLoading } from "../TopLoading/TopLoading";
import { CostomHead } from "./CastomHead";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CostomHead />
            <TopLoading />
            <>{children}</>
        </>
    );
}
