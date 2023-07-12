import { Artifact } from "@/components/Web/Artifact/Artifact";
import { SearchBar } from "@/components/Web/SearchBar/SearchBar";
import { useTopLoading } from "@/hooks/common";
import { useGetWorks } from "@/hooks/web";
import { Work } from "@/types/common";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

const Artifacts = () => {
    const router = useRouter();
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works`
    );
    useTopLoading({ isLoading, message: "getting" });
    useEffect(() => {
        const { selectedDepartment } = router.query;
        refetch(
            `&tag_names=${selectedDepartment?.toString().toUpperCase()}`,
            true
        );
    }, [router.query]);
    return (
        <Box component="div">
            <SearchBar />
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
export default Artifacts;
