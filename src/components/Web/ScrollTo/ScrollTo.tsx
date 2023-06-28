import { Button, useMediaQuery } from "@mui/material";

export type ScrollToProps = {
    to: string;
};

export const ScrollTo = ({ to }: ScrollToProps) => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    return (
        <Button
            sx={{
                mixBlendMode: "multiply",
                color: isDarkMode ? "white" : "black",
                ":after": {
                    content: '""',
                    background: `linear-gradient(to top,${
                        isDarkMode ? "white" : "black"
                    } 25%,transparent 25%,transparent 75%,${
                        isDarkMode ? "white" : "black"
                    } 75%)`,
                    position: "absolute",
                    backgroundPosition: "center bottom",
                    width: "2%",
                    height: "10vh",
                    left: "48%",
                    top: "100%",
                    backgroundSize: "auto 400%",
                    transition: "0.5s",
                },
                ":hover:after": {
                    backgroundPosition: "center top",
                },
                ":before": {
                    content: '""',
                    position: "absolute",
                    width: "60%",
                    height: "100vh",
                    background: "transparent",
                },
            }}
        >
            scroll
        </Button>
    );
};
