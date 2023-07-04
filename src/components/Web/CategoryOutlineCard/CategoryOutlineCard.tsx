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
                    backdropFilter: "blur(2px)",
                    pl: 5,
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        height: "100%",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography
                        sx={{
                            pl: "4vmin",
                            pt: "4vh",
                            fontSize: "10vmin",
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
                                pt: "4vh",
                                px: "6vmin",
                                fontSize: "4vmin",
                                letterSpacing: "1vmin",
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
                                whiteSpace: "break-spaces",
                            }}
                        >
                            {caption}
                        </Typography>
                    </Box>
                    <Button
                        href={redirectPath}
                        endIcon={<KeyboardDoubleArrowRightIcon />}
                        sx={{
                            marginX: "auto",
                            p: 2,
                            mb: "7vh",
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
    );
};
