import { Artifact } from "@/components/Web/Artifact/Artifact";
import { useTopLoading } from "@/hooks/common";
import { Work } from "@/types/common";
import { Grid } from "@mui/material";
import axios from "axios";
import useSWR from "swr";

const Artifacts = () => {
    const fetcher = (url: string) => axios(url).then((res) => res.data.works);
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works`,
        fetcher
    );
    useTopLoading({ isLoading, message: "loading" });
    return (
        <Grid container justifyContent={"center"} spacing={3}>
            {data?.map((artifact: Work, index: number) => (
                <Grid item key={index}>
                    <Artifact {...artifact} />
                </Grid>
            ))}
        </Grid>
    );
};
export default Artifacts;
