import { GetTag } from "@/types/common";
import { Grid } from "@mui/material";
import { WorkTag } from "../GetTags/WorkTag";

export function ShowWorkTag(tags: GetTag[]) {
    return (
        <Grid container>
            {tags.map((tag: GetTag, index: number) => (
                <Grid item key={index} spacing={2}>
                    <WorkTag {...tag} />
                </Grid>
            ))}
        </Grid>
    );
}
