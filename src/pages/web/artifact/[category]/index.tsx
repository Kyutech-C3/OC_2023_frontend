import { Artifact } from "@/components/Web/Artifact/Artifact";
import { useTopLoading } from "@/hooks/common";
import { useGetWorks } from "@/hooks/web";
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
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works?tag_names=${category}`
    );
    useTopLoading({ isLoading, message: "getting" });
    return (
        <Box component="div" sx={{ mt: 5 }}>
            <InfiniteScroll
                loadMore={() => {
                    if (works.length != 0) {
                        refetch(
                            `newest_work_id=${works[works.length - 1].id}`,
                            false
                        );
                    }
                }}
                hasMore={isContinue}
            >
                <Grid container justifyContent={"center"} spacing={3}>
                    {works?.map((artifact: Work, index: number) => (
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
