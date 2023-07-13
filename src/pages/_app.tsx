import Layout from "@/components/Common/others/Layout";
import { createTheme } from "@/libs/theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = createTheme(isDarkMode);
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </RecoilRoot>
    );
}
MyApp.getInitialProps = async () => ({ pageProps: {} });

export default MyApp;
