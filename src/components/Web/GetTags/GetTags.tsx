import { Grid, Typography } from "@mui/material";
import Image from "next/image";

interface GetTagsProps {
    str: string;
}

interface TagProps {
    logourl: string;
    logoname: string;
}

const Tags: TagProps[] = [
    {
        logourl: "./ts-logo-128.png",
        logoname: "typescript",
    },
    {
        logourl: "./blender.png",
        logoname: "blender",
    },
];
export const GetTags = (Tags:TagProps) => {
    return (
        {
            Tags.map((Tags:TagProps, index: number) => (
                    <Grid container md="auto" key={index}>
                        <Image alt="image" src={Tags.logourl} />
                        <Typography textAlign={"center"} ml={2} marginTop="8px">
                            {Tags.logoname}
                        </Typography>
                    </Grid>
            ))
        }
    )
}