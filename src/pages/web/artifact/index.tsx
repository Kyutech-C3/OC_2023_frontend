import { Artifact } from "@/components/Web/Artifact/Artifact";
import { SearchBar } from "@/components/Web/SearchBar/SearchBar";
import { useTopLoading } from "@/hooks/common";
import { useGetWorks } from "@/hooks/web";
import { combineStrings } from "@/libs/combineArray";
import { Work } from "@/types/common";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

const Artifacts = () => {
    const router = useRouter();
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works`,
        { tag_names: "OC2023" }
    );
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    useTopLoading({ isLoading, message: "getting" });
    useEffect(() => {
        const { selectedDepartment, tags, searchWord } = router.query;
        refetch(
            {
                tag_names: [
                    ...combineStrings(selectedDepartment, tags),
                    "OC2023",
                ].join(","),
                search_word: searchWord,
            },
            true
        );
    }, [router.query]);
    return (
        <Box
            component="div"
            sx={{
                backgroundColor: isDarkMode ? "black" : "white",
                minHeight: "100vh",
            }}
        >
            <SearchBar />
            <InfiniteScroll
                loadMore={() => {
                    if (works.length != 0) {
                        refetch(
                            {
                                tag_names: "OC2023",
                                newest_work_id: works[works.length - 1].id,
                            },
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
export default Artifacts;
