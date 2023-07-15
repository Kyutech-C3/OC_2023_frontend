"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
    const router = useRouter();


    useEffect(() => {
        if (router.isReady) {
            router.push("./map");

        }
    }, []);
};
export default Index;
