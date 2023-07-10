import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { FooterIcons } from "../FooterIcons/FooterIcons";

export const Footer = () => {
    const isSmall = useMediaQuery("(min-width:600px)");
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <Stack
            textAlign="center"
            sx={{ height: "20vh", backgroundColor: isDarkMode ? "black" : "white" }}
        >
            <Box
                component="div"
                sx={{
                    position: "relative",
                    width: "100%",
                    backgroundColor: "#FFECAD99",
                    height: "16vh",
                    p: "4vh",
                }}
            >
                {isSmall && (
                    <Image
                        src="/image/icon/C3OClogo.webp"
                        alt="C3OClogo"
                        height={50}
                        width={50}
                        style={{
                            position: "absolute",
                            left: "10%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "8vw",
                            height: "8vw",
                        }}
                    />
                )}
                <FooterIcons />
            </Box>
            <Box
                component="div"
                sx={{ backgroundColor: "#BCFFD399", height: "4vh", pt: "1vh" }}
            >
                <Typography variant="caption" color="text.primary">
                    ©︎2022-2023 C3
                </Typography>
            </Box>
        </Stack>
    );
};
