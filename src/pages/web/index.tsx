import { CategoryOutlines } from "@/components/Web/CategoryOutlines/CategoryOutlines";
import { TopScroll } from "@/components/Web/TopScroll/TopScroll";
import { TopTitle } from "@/components/Web/TopTitle/TopTitle";
import { Box, useMediaQuery } from "@mui/material";

const Web = () => {
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <Box
            component="div"
            sx={{ scrollSnapType: "y mandatory", userSelect: "none" }}
        >
            <Box
                component="div"
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundImage:
                        "url(https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Box
                    component="div"
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        p: 5,
                        alignContent: "center",
                        backdropFilter: "blur(10px)",
                        width: "100%",
                        height: "100vh",
                        backgroundColor: `rgba(${isDarkMode ? 0 : 255}, ${
                            isDarkMode ? 0 : 255
                        }, ${isDarkMode ? 0 : 255},0.5)`,
                    }}
                >
                    <TopTitle />
                    <Box
                        component="div"
                        sx={{ position: "absolute", right: 0, top: 0 }}
                    >
                        <TopScroll />
                    </Box>
                </Box>
            </Box>
            <CategoryOutlines />
        </Box>
    );
};
export default Web;
