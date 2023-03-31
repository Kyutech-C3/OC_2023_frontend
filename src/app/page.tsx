"use client";
import { useRouter } from "next/navigation";

const Index = () => {
    const router = useRouter();
    router.push("./map");
};
export default Index;
