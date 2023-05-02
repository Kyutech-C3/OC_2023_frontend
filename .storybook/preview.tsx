import { ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import {} from "@storybook/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { createTheme } from "./../src/libs/theme";
const theme = createTheme(false);
const preview: Preview = {
    decorators: [
        (Story) => (
            <RecoilRoot>
                <ThemeProvider theme={theme}>
                    <Story />
                </ThemeProvider>
            </RecoilRoot>
        ),
    ],
    parameters: {
        backgrounds: {
            default: "light",
        },
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;

export const decorators = [(Story) => <Story />];
