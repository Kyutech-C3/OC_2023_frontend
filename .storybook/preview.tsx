import { createTheme } from "./../src/libs/theme";

import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useMemo } from "react";
import { RecoilRoot } from "recoil";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        expanded: true,
        hideNoControlsWarning: true,
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const globalTypes = {
    theme: {
        name: "Theme",
        title: "Theme",
        description: "Theme for your components",
        defaultValue: "light",
        toolbar: {
            icon: "paintbrush",
            dynamicTitle: true,
            items: [
                { value: "light", left: "☀️", title: "Light mode" },
                { value: "dark", left: "🌙", title: "Dark mode" },
            ],
        },
    },
};
const withMuiTheme = (Story, context) => {
    const { theme: themeKey } = context.globals;
    const theme = useMemo(() => createTheme(themeKey == "dark"), [themeKey]);

    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        </RecoilRoot>
    );
};
export const decorators = [withMuiTheme];
