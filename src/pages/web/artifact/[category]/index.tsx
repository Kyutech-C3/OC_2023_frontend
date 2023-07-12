import { Artifact } from "@/components/Web/Artifact/Artifact";
import { useTopLoading } from "@/hooks/common";
import { useGetWorks } from "@/hooks/web";
import { castCategoryName } from "@/libs/getCategory";
import { Work } from "@/types/common";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroller";

const CategoryTop = () => {
    const router = useRouter();
    const { category } = router.query;
    if (
        !["game", "hack", "music", "cg2d", "cg3d"].includes(
            typeof category == "undefined"
                ? ""
                : typeof category == "string"
                ? category
                : category[0]
        )
    ) {
        if (router.isReady) {
            router.push("/web/artifact");
        }
    }
    console.log(
        castCategoryName(
            typeof category == "string" ? category : category![0]
        ).toUpperCase()
    );
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works?tag_names=OC2023`
    );
    useTopLoading({ isLoading, message: "getting" });
    if (isLoading) {
        return <></>;
    }
    return (
        <Box component="div" sx={{}}>
            <Box
                component="div"
                sx={{
                    position: "fixed",
                    backgroundImage: `url(/image/background/${category}.webp)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                    height: "110vh",
                    zIndex: -10,
                }}
            />
            <Box
                component="div"
                sx={{
                    position: "fixed",
                    backgroundColor: "#000000aa",
                    width: "100vw",
                    height: "110vh",
                    zIndex: -5,
                }}
            />

            <InfiniteScroll
                loadMore={() => {
                    if (works.length != 0) {
                        refetch(
                            `newest_work_id=${
                                works[works.length - 1].id
                            }&tag_names=${category}`,
                            false
                        );
                    }
                }}
                hasMore={isContinue}
            >
                <Grid
                    container
                    justifyContent={"center"}
                    spacing={6}
                    sx={{ backgroundColor: "#00000066", pt: 5 }}
                >
                    {works
                        .filter((work) =>
                            work.tags.some(
                                (tag) =>
                                    tag.name ===
                                    castCategoryName(
                                        typeof category == "string"
                                            ? category
                                            : category![0]
                                    ).toUpperCase()
                            )
                        )
                        .map((artifact: Work, index: number) => (
                            <Grid item key={index}>
                                <Artifact {...artifact} />
                            </Grid>
                        ))}
                </Grid>
            </InfiniteScroll>
        </Box>
    );
};

export default CategoryTop;
