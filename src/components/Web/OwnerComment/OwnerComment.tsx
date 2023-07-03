import { comments } from "@/constants/ownerComment";
import { Box, Typography, useMediaQuery } from "@mui/material";

export const OwnerComment = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const isSmall = useMediaQuery("(min-width:600px)");

    return (
        <Box
            id="ownerComment"
            component="div"
            sx={{ position: "relative", color: "text.primary" }}
        >
            <Box
                component="div"
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${
                        isDarkMode ? 0 : 255
                    }, ${isDarkMode ? 0 : 255},0.85)`,
                    backdropFilter: "blur(1px)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: isSmall ? "2.5vmin" : "12px",
                        whiteSpace: "pre-wrap",
                        height: "100%",
                        pl: 5,
                        letterSpacing: "0.7vmin",
                        textShadow: `2px 2px 4px rgba(${
                            isDarkMode ? 0 : 255
                        }, ${isDarkMode ? 0 : 255}, ${
                            isDarkMode ? 0 : 255
                        }, 1), -2px -2px 4px rgba(${isDarkMode ? 0 : 255}, ${
                            isDarkMode ? 0 : 255
                        }, ${isDarkMode ? 0 : 255}, 0.25)`,
                    }}
                >
                    {comments}
                </Typography>
            </Box>
        </Box>
    );
};
