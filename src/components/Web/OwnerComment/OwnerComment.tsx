import { comments } from "@/constants/ownerComment";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { FlowBackImages } from "../FlowBackImages/FlowBackImages";

export const OwnerComment = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
                        whiteSpace: "pre-wrap",
                        height: "100%",
                        pl: 5,
                        letterSpacing: 5,
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
