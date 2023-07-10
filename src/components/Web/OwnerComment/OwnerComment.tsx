import { comments } from "@/constants/ownerComment";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import MessageTitle from "../MessageTitle/MessageTitle";

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
                    backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${isDarkMode ? 0 : 255
                        }, ${isDarkMode ? 0 : 255},0.85)`,
                    backdropFilter: "blur(1px)",
                }}
            >
                <Stack sx={{ pl: "5vw" }} spacing={3}>
                    <Stack direction="row" sx={{ alignItems: "end" }} spacing={1}>
                        <Image src="/image/icon/C3logo.webp" alt="C3logo" width={100} height={100} style={{ width: "10vw", height: "10vw" }} />
                        <MessageTitle />
                    </Stack>
                    <Typography
                        sx={{
                            fontSize: "1.3vmax",
                            whiteSpace: "pre-wrap",
                            height: "100%",
                            pl: 5,
                            letterSpacing: "0.3vmax",
                            textShadow: `2px 2px 4px rgba(${isDarkMode ? 0 : 255
                                }, ${isDarkMode ? 0 : 255}, ${isDarkMode ? 0 : 255
                                }, 1), -2px -2px 4px rgba(${isDarkMode ? 0 : 255}, ${isDarkMode ? 0 : 255
                                }, ${isDarkMode ? 0 : 255}, 0.25)`,
                        }}
                    >
                        {comments}
                    </Typography>
                </Stack>

            </Box>
        </Box>
    );
};
