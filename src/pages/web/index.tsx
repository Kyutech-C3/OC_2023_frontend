import { CategoryOutlines } from "@/components/Web/CategoryOutlines/CategoryOutlines";
import { TopBackground } from "@/components/Web/TopBackground/TopBackground";
import { TopScroll } from "@/components/Web/TopScroll/TopScroll";
import { TopTitle } from "@/components/Web/TopTitle/TopTitle";
import { Box, useMediaQuery } from "@mui/material";

const Web = () => {
    return (
        <Box
            component="div"
            sx={{ scrollSnapType: "y mandatory", userSelect: "none" }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    backdropFilter: "blur(10px)",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <TopBackground />

                <TopTitle />
            </Box>
            <Box
                component="div"
                sx={{ position: "absolute", right: 0, top: 0 }}
            >
                <TopScroll />
            </Box>
            <CategoryOutlines />
        </Box>
    );
};
export default Web;
