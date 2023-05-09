import { Artifact } from "@/components/Web/Artifact/Artifact";
import { useTopLoading } from "@/hooks/common";
import { useGetWorks } from "@/hooks/web";
import { Work } from "@/types/common";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroller";

const Artifacts = () => {
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works`
    );
    useTopLoading({ isLoading, message: "getting" });

    return (
        <InfiniteScroll
            loadMore={() => {
                if (works.length != 0) {
                    refetch(`newest_work_id=${works[works.length - 1].id}`);
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
    );
};
export default Artifacts;
