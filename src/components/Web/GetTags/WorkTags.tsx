import { GetTag } from "@/types/common";
import { Grid } from "@mui/material";
import { WorkTag } from "./WorkTag";

export function WorkTags({ tags }: { tags: GetTag[] }) {
    return (
        <Grid container>
            {tags.map((tag: GetTag, index) => (
                <Grid item key={index} spacing={2}>
                    <WorkTag {...tag} />
                </Grid>
            ))}
        </Grid>
    );
}
