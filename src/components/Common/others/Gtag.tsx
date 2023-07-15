import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const Gtag = () => {
    const router = useRouter();
    useEffect(() => {
        const handleRouterChange = (url: any) => {
            window.gtag("config", process.env.NEXT_PUBLIC_GA_ID ?? "", {
                page_path: url,
            });
        };
        router.events.on("routeChangeComplete", handleRouterChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouterChange);
        };
    }, [router.events]);
    return (
        <>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                    `,
                }}
            />
        </>
    );
};
