import { imagePaths } from "@/constants/topBackground";
import { topHoveringAtom } from "@/state/topHovering";
import { Box, Stack, useMediaQuery } from "@mui/material";
import { useRecoilValue } from "recoil";

export const TopBackground = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    const isSmall = useMediaQuery("(min-width:800px)");
    const { hovering } = useRecoilValue(topHoveringAtom);
    return (
        <Stack
            direction={isSmall ? "column" : "row"}
            sx={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: isDarkMode ? "black" : "white",
                zIndex: -100,
            }}
        >
            {imagePaths.map(({ department, imagePath }, index) => (
                <Box
                    key={department}
                    component="div"
                    sx={{
                        backgroundImage: `url(${imagePath})`,
                        backgroundSize: "center",
                        backgroundPosition: "bottom",
                        width: isSmall ? "32vw" : "100%",
                        height: isSmall ? "100%" : "32vh",
                        position: "absolute",
                        top: isSmall ? "0" : `${index * 17}vh`,
                        left: isSmall ? `${index * 17}vw` : "0",
                        clipPath: isSmall
                            ? "polygon(100% 0%, 50% 100%, 0% 100%, 50% 0%)"
                            : "polygon(100% 0%, 100% 50%, 0% 100%, 0% 50%)",
                        animation: `down 0.3s`,
                        animationDuration: `${index * 0.15 + 0.6}s`,
                        transform: `scale(${
                            hovering == department ? 1.1 : 1
                        }) translateZ(0)`,
                        transition: "0.8s transform",
                        "@keyframes down": {
                            "0%": {
                                transform:
                                    "translateX(30vh) translateY(-100vh)",
                            },
                            "100%": {
                                transform: "translateX(0) translateY(0)",
                            },
                        },
                    }}
                >
                    <Box
                        component="div"
                        sx={{
                            width: isSmall ? "100%" : "100vw",
                            height: isSmall ? "100vh" : "100%",
                            backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${
                                isDarkMode ? 0 : 255
                            }, ${isDarkMode ? 0 : 255},${
                                isDarkMode ? 0.5 : 0.7
                            })`,
                            backdropFilter: "blur(2px)",
                        }}
                    />
                </Box>
            ))}
        </Stack>
    );
};
