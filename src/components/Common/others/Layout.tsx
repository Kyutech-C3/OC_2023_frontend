import React from "react";
import { TopLoading } from "../TopLoading/TopLoading";
import { CostomHead } from "./CastomHead";
import { Gtag } from "./Gtag";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <CostomHead />
            <Gtag />
            <TopLoading />
            <>{children}</>
        </>
    );
}
