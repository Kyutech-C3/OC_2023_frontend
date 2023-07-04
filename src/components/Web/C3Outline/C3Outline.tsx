import { aboutC3 } from "@/constants/outlines";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

export const C3Outline = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const isSmall = useMediaQuery("(min-width:600px)");

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
                    fontSize: isSmall ? "30px" : "3.6vmin",
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
        </Box>
    );
};

const AboutC3 = () => {
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
            color: "white",
            fontSize: "12vmin",
        },
        {
            text: "3",
            color: "white",
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
