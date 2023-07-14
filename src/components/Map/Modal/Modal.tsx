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

export type ModalProps = {
    category: string;
};

export const Modal = (props: ModalProps) => {
    const { works, refetch, isLoading, isContinue } = useGetWorks(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works`,
        { tag_names: `OC2023,${props.category}` }
    );
    useTopLoading({ isLoading, message: "getting" });

    return (
        <Box
            component="div"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(7px)",
                height: "84vh",
                width: "93vw",
                borderRadius: "10px",
                overflow: "scroll",
                position: "fixed",
                inset: 0,
                margin: "auto",
            }}
        >
            <Box component="div" sx={{ height: "3%" }} />
            <InfiniteScroll
                loadMore={() => {
                    if (works.length != 0) {
                        refetch(
                            {
                                tag_names: `OC2023,${props.category}`,
                                newest_work_id: works[works.length - 1].id,
                            },
                            false
                        );
                    }
                }}
                hasMore={isContinue}
            >
                <Grid container justifyContent={"center"} spacing={3}>
                    {works?.map(
                        (
                            artifact: Work & { likes: string[] },
                            index: number
                        ) => (
                            <Grid item key={index}>
                                <Artifact {...artifact} />
                            </Grid>
                        )
                    )}
                </Grid>
            </InfiniteScroll>
        </Box>
    );
};
