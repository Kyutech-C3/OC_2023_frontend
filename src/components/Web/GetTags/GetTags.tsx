import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

interface TagProps {
    logourl: string;
    logoname: string;
}

export function GetTags() {
    const [Tags, setTags] = useState<TagProps[]>([]);
    const DemoTags: TagProps[] = [
        {
            logourl: "./ts-logo-128.png",
            logoname: "typescript",
        },
        {
            logourl: "./blender.png",
            logoname: "blender",
        },
    ];

    const handleClick = () => {
        setTags(DemoTags);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClick}>
                {" "}
                settag{" "}
            </Button>
            {Tags.map((Tags: TagProps, index: number) => (
                <Grid container md="auto" key={index}>
                    <Image
                        alt="image"
                        width={20}
                        height={20}
                        src={Tags.logourl}
                    />
                    <Typography textAlign={"center"} ml={2}>
                        {Tags.logoname}
                    </Typography>
                </Grid>
            ))}
        </>
    );
}
