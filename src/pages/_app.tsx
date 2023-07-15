import Layout from "@/components/Common/others/Layout";
import { createTheme } from "@/libs/theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import dynamic from "next/dynamic";

const Wrapper = dynamic(() => import("@/components/Common/others/Wrapper"), {
    ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = createTheme(isDarkMode);
    return (
        <Wrapper>
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </RecoilRoot>
        </Wrapper>
    );
}
MyApp.getInitialProps = async () => ({ pageProps: {} });

export default MyApp;
