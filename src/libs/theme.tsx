import { createTheme as muiCreateTheme } from "@mui/material";

const lightModePalette = {
    primary: {
        main: "#EAEA3B",
        light: "#F8F84A",
        dark: "#CDCD19",
        contrastText: "#1D1D00",
    },
    secondary: {
        main: "#37FFC7",
        light: "#BBFFE3",
        dark: "#00E1AD",
        contrastText: "#002117",
    },
    hack: {
        main: "#FFD9E2",
        light: "#FFECF0",
        dark: "#FFB0C8",
        contrastText: "#3E001E",
    },
    game: {
        main: "#BAF294",
        light: "#CEFFAB",
        dark: "#9FD67B",
        contrastText: "#092100",
    },
    cg3d: {
        main: "#FAD7FF",
        light: "#FFEBFF",
        dark: "#EFB0FF",
        contrastText: "#330045",
    },
    cg2d: {
        main: "#FFDCC4",
        light: "#FFEDE3",
        dark: "#FFB780",
        contrastText: "#2F1400",
    },
    music: {
        main: "#CDE5FF",
        light: "#E8F2FF",
        dark: "#95CCFF",
        contrastText: "#001D32",
    },
};
const darkModePalette = {
    primary: {
        main: "#494900",
        light: "#272700",
        dark: "#626200",
        contrastText: "#EAEA3B",
    },
    secondary: {
        main: "#00513D",
        light: "#002C20",
        dark: "#006C51",
        contrastText: "#37FFC7",
    },
    hack: {
        main: "#7B2949",
        light: "#4F0428",
        dark: "#984061",
        contrastText: "#FFD9E2",
    },
    game: {
        main: "#235103",
        light: "#OF2C00",
        dark: "#3B6A1D",
        contrastText: "#BAF294",
    },
    cg3d: {
        main: "#662F79",
        light: "#410655",
        dark: "#804893",
        contrastText: "#FAD7FF",
    },
    cg2d: {
        main: "#6F3800",
        light: "#3E1D00",
        dark: "#924C00",
        contrastText: "#FFDCC4",
    },
    music: {
        main: "#004A75",
        light: "#002842",
        dark: "#00639A",
        contrastText: "#CDE5FF",
    },
};
export const createTheme = (isDarkMode: boolean) => {
    return muiCreateTheme({
        palette: isDarkMode ? darkModePalette : lightModePalette,
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
};
