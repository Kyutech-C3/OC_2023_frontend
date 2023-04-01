import { createTheme as muiCreateTheme } from "@mui/material";

export const createTheme = () =>
    muiCreateTheme({
        palette: {
            primary: {
                main: "#7af5a3",
                light: "#89edaa",
                dark: "#51d17c",
                contrastText: "#f7f7f7",
            },
            secondary: {
                main: "#ffe17e",
                light: "#fff8df",
                dark: "#debf5a",
                contrastText: "#a1a1a1",
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        textTransform: "none",
                    },
                },
            },
        },
    });
