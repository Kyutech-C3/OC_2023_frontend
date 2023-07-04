import { C3Outline } from "@/components/Web/C3Outline/C3Outline";
import { CategoryOutlines } from "@/components/Web/CategoryOutlines/CategoryOutlines";
import { OwnerComment } from "@/components/Web/OwnerComment/OwnerComment";
import { RedirectMap } from "@/components/Web/RedirectMap/RedirectMap";
import { ScrollTo } from "@/components/Web/ScrollTo/ScrollTo";
import { TopBackground } from "@/components/Web/TopBackground/TopBackground";
import { TopScroll } from "@/components/Web/TopScroll/TopScroll";
import { TopTitle } from "@/components/Web/TopTitle/TopTitle";
import { Box, Divider, useMediaQuery } from "@mui/material";

const Web = () => {
    const isSmall = useMediaQuery("(min-width:900px)");

    return (
        <Box
            component="div"
            sx={{ scrollSnapType: "y mandatory", userSelect: "none" }}
        >
            <ScrollTo to="ownerComment" />
            <RedirectMap />
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
                <ScrollTo to="ownerComment" />
            </Box>
            {isSmall && (
                <Box
                    component="div"
                    sx={{ position: "absolute", right: 0, top: 0 }}
                >
                    <TopScroll />
                </Box>
            )}
            <OwnerComment />
            <Divider sx={{ backgroundColor: "white" }} />
            <C3Outline />
            <CategoryOutlines />
        </Box>
    );
};
export default Web;
