import Layout from "@/components/Common/othres/Layout";
import { createTheme } from "@/libs/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme();
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

export default MyApp;
