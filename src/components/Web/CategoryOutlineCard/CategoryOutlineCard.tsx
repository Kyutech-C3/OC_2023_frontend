import { CategoryOutlineCardProps } from "@/types/web";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
export const CategoryOutlineCard = ({
    category,
    backgroundImagePath,
    caption,
    redirectPath,
}: CategoryOutlineCardProps) => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
    return (
        <Box
            id={category}
            component="div"
            sx={{
                userSelect: "none",
                backgroundImage: `url(${backgroundImagePath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "text.primary",
            }}
        >
            <Box
                component="div"
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${
                        isDarkMode ? 0 : 255
                    }, ${isDarkMode ? 0 : 255},0.5)`,
                    backdropFilter: "blur(10px)",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        p: 7,
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            opacity: "70%",
                            textTransform: "uppercase",
                            fontWeight: 600,
                            textShadow: `2px 2px 4px rgba(${
                                isDarkMode ? 0 : 255
                            }, ${isDarkMode ? 0 : 255}, ${
                                isDarkMode ? 0 : 255
                            }, 1), -2px -2px 4px rgba(${
                                isDarkMode ? 0 : 255
                            }, ${isDarkMode ? 0 : 255}, ${
                                isDarkMode ? 0 : 255
                            }, 0.25)`,
                        }}
                    >
                        {category}
                    </Typography>
                    <Box component="div">
                        <Typography
                            sx={{
                                pl: 5,
                                letterSpacing: 5,
                                textShadow: `2px 2px 4px rgba(${
                                    isDarkMode ? 0 : 255
                                }, ${isDarkMode ? 0 : 255}, ${
                                    isDarkMode ? 0 : 255
                                }, ${
                                    isDarkMode ? 0 : 255
                                }), -2px -2px 4px rgba(${
                                    isDarkMode ? 0 : 255
                                }, ${isDarkMode ? 0 : 255}, ${
                                    isDarkMode ? 0 : 255
                                }, 0.25)`,
                            }}
                            variant="h4"
                        >
                            {caption}
                        </Typography>
                    </Box>

                    <Box component="div" sx={{ textAlign: "center" }}>
                        <Button
                            href={redirectPath}
                            endIcon={<KeyboardDoubleArrowRightIcon />}
                            sx={{
                                p: 2,
                                overflow: "hidden",
                                width: "30vw",
                                mt: "auto",
                                minWidth: "300px",
                                border: "3px solid black",
                                boxShadow: `2px 2px 4px rgba(${
                                    isDarkMode ? 0 : 255
                                }, ${isDarkMode ? 0 : 255}, ${
                                    isDarkMode ? 0 : 255
                                }, 0.4), -2px -2px 4px rgba(${
                                    isDarkMode ? 0 : 255
                                },${isDarkMode ? 0 : 255}, ${
                                    isDarkMode ? 0 : 255
                                }, 0.25)`,
                                borderRadius: "999px",
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: "text.primary",
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                alignItems: "center",
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
                            もっと見る
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
