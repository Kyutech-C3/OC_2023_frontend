import { Button, useMediaQuery } from "@mui/material";
import { Link as Scroll } from "react-scroll";

export type ScrollToProps = {
    to: string;
};

export const ScrollTo = ({ to }: ScrollToProps) => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    return (
        <Scroll to={to} smooth={true} duration={800}>
            <Button
                sx={{
                    position: "absolute",
                    left: "50%",
                    bottom: "10vh",
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
        </Scroll>
    );
};
