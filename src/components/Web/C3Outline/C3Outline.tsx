import { aboutC3 } from "@/constants/outlines";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";

export const C3Outline = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    return (
        <Box
            component="div"
            sx={{
                minHeight: "100vh",
                p: 3,
                pt: 0,
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
                    fontSize: "20px",
                    px: 5,
                    pt: 8,
                    letterSpacing: "0.5vw",
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
            fontSize: "6vw",
        },
        {
            text: "B",
            color: "#9EFF00",
            fontSize: "7vw",
        },
        {
            text: "O",
            color: "#FFE600",
            fontSize: "8vw",
        },
        {
            text: "U",
            color: "#70FF00",
            fontSize: "9vw",
        },
        {
            text: "T",
            color: "#FFE601",
            fontSize: "10vw",
        },
        {
            text: "C",
            color: "white",
            fontSize: "12vw",
        },
        {
            text: "3",
            color: "white",
            fontSize: "12vw",
        },
        {
            text: "!",
            color: "#FFE600",
            fontSize: "12vw",
        },
        {
            text: "!",
            color: "#BAFF01",
            fontSize: "12vw",
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
