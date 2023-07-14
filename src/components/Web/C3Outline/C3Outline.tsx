import { aboutC3 } from "@/constants/outlines";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

export const C3Outline = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <Box
            component="div"
            sx={{
                pt: "3vmin",
                pl: "7vmin",
                width: "100%",
                height: "100vh",
                backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${
                    isDarkMode ? 0 : 255
                }, ${isDarkMode ? 0 : 255},0.85)`,
                backdropFilter: "blur(1px)",
                color: "text.primary",
            }}
        >
            <AboutC3 />
            <Typography
                sx={{
                    fontSize: "1.7vmax",
                    p: "4vmin",
                    textShadow: `2px 2px 4px rgba(${isDarkMode ? 0 : 255}, ${
                        isDarkMode ? 0 : 255
                    }, ${isDarkMode ? 0 : 255}, 1), -2px -2px 4px rgba(${
                        isDarkMode ? 0 : 255
                    }, ${isDarkMode ? 0 : 255}, ${isDarkMode ? 0 : 255}, 0.25)`,
                    letterSpacing: "0.7vmin",
                    whiteSpace: "pre-wrap",
                }}
            >
                {aboutC3}
            </Typography>
            <Box component="div" textAlign="center">
                <Button
                    href="/web/artifact"
                    endIcon={<KeyboardDoubleArrowRight />}
                    sx={{
                        marginX: "auto",
                        p: 2,
                        mb: "7vh",
                        overflow: "hidden",
                        width: "30vw",
                        mt: "auto",
                        minWidth: "300px",
                        border: `3px solid black`,
                        boxShadow: `2px 2px 4px rgba(${isDarkMode ? 0 : 255}, ${
                            isDarkMode ? 0 : 255
                        }, ${isDarkMode ? 0 : 255}, 0.4), -2px -2px 4px rgba(${
                            isDarkMode ? 0 : 255
                        },${isDarkMode ? 0 : 255}, ${
                            isDarkMode ? 0 : 255
                        }, 0.25)`,
                        borderRadius: "999px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        color: "text.primary",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        transition: "background-color 0.3s ease",
                        ":before": {
                            content: '""',
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: 0,
                            height: "100%",
                            background:
                                "linear-gradient(rgba(255, 255, 0, 0.3),rgba(0, 255, 0, 0.3))",
                            transition: "width 0.3s ease",
                            borderRadius: "999px",
                        },
                        ":hover": {
                            ":before": {
                                width: "100%",
                            },
                        },
                    }}
                >
                    制作物一覧へ
                </Button>
            </Box>
        </Box>
    );
};

const AboutC3 = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const characters = [
        {
            text: "A",
            color: "#FFB800",
            fontSize: "6vmin",
        },
        {
            text: "B",
            color: "#9EFF00",
            fontSize: "7vmin",
        },
        {
            text: "O",
            color: "#FFE600",
            fontSize: "8vmin",
        },
        {
            text: "U",
            color: "#70FF00",
            fontSize: "9vmin",
        },
        {
            text: "T",
            color: "#FFE601",
            fontSize: "10vmin",
        },
        {
            text: "C",
            color: isDarkMode ? "white" : "black",
            fontSize: "12vmin",
        },
        {
            text: "3",
            color: isDarkMode ? "white" : "black",
            fontSize: "12vmin",
        },
        {
            text: "!",
            color: "#FFE600",
            fontSize: "12vmin",
        },
        {
            text: "!",
            color: "#BAFF01",
            fontSize: "12vmin",
        },
    ];
    return (
        <Stack direction="row" sx={{ alignItems: "end" }}>
            {characters.map(({ text, color, fontSize }, index) => (
                <Typography
                    key={index}
                    sx={{
                        fontSize,
                        color,
                        fontWeight: "bold",
                        height: fontSize,
                    }}
                >
                    {text}
                </Typography>
            ))}
        </Stack>
    );
};
