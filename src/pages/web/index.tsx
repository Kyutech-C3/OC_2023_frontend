import { Footer } from "@/components/Common/Footer/Footer";
import { TweetButton } from "@/components/Common/TweetButton/TweetButton";
import { C3Outline } from "@/components/Web/C3Outline/C3Outline";
import { CategoryOutlines } from "@/components/Web/CategoryOutlines/CategoryOutlines";
import { OwnerComment } from "@/components/Web/OwnerComment/OwnerComment";
import { RedirectMap } from "@/components/Web/RedirectMap/RedirectMap";
import { ScrollTo } from "@/components/Web/ScrollTo/ScrollTo";
import { SideBar } from "@/components/Web/SideBar/SideBar";
import { SurveyLink } from "@/components/Web/SurveyLink/SurveyLink";
import { TopBackground } from "@/components/Web/TopBackground/TopBackground";
import { TopScroll } from "@/components/Web/TopScroll/TopScroll";
import { TopTitle } from "@/components/Web/TopTitle/TopTitle";
import { Box, Divider, Grid, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const Web = () => {
    const isSmall = useMediaQuery("(min-width:900px)");
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <Box
            id="top"
            component="div"
            sx={{ scrollSnapType: "y mandatory", userSelect: "none", backgroundColor: isDarkMode ? "black" : "white" }}
        >
            <style>
                {`@keyframes float {
                    0% {
                        transform: translateY(0%);
                    }
                    50% {
                        transform: translateY(-15%);
                    }
                    100% {
                        transform: translateY(0%);
                    }
                }`}
            </style>
            <Scroll to="top" smooth={true} duration={800} style={{ position: "fixed", right: 0, bottom: 0, zIndex: 1000, width: "10vw", minWidth: "100px", minHeight: "140px", height: "14vw", cursor: "pointer", animation: "float 3s ease infinite" }}>
                <Image src="/image/illust/balloonGirl.webp" fill alt="balloonGirl" style={{ objectFit: 'contain' }} />
            </Scroll >
            <ScrollTo to="ownerComment" />
            <RedirectMap />
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignContent: "center",
                    backdropFilter: "blur(2px)",
                    width: "100%",
                    height: "100vh",
                }}
            >
                <TopBackground />
                <TopTitle />
                <ScrollTo to="ownerComment" />
            </Box>
            {
                isSmall && (
                    <Box
                        component="div"
                        sx={{ position: "absolute", right: 0, top: 0 }}
                    >
                        <TopScroll />
                    </Box>
                )
            }
            <SideBar />
            <OwnerComment />
            <Divider sx={{ backgroundColor: "white" }} />
            <C3Outline />
            <CategoryOutlines />
            <Grid container direction="row" sx={{
                py: 2, placeContent: "center", backgroundColor: "#FFECADAA",
            }} spacing={2}>
                <Grid item>
                    <SurveyLink />
                </Grid>
                <Grid item>
                    <TweetButton size="medium" text={`${process.env.NEXT_PUBLIC_FRONT_END_URL}/web`}
                    />
                </Grid>
            </Grid>
            <Footer />
        </Box >
    );
};
export default Web;
