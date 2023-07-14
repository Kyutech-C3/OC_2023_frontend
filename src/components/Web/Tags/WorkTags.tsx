import { GetTag } from "@/types/common";
import { Grid } from "@mui/material";
import { WorkTag } from "./WorkTag";

export function WorkTags({ tags }: { tags: GetTag[] }) {
    return (
        <Grid container spacing={1}>
            {tags?.map((tag: GetTag, index) => (
                <Grid item key={index}>
                    <WorkTag {...tag} />
                </Grid>
            ))}
        </Grid>
    );
}
