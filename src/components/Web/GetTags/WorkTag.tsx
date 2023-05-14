import { GetTag } from "@/types/common";
import { Games } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import Image from "next/legacy/image";

export function WorkTag({ name }: GetTag) {
    const tag2icon = {
        cg: "cg.png",
        hack: "hack.png",
        blender: "/image/icon/blender.png",
        game: <Games />,
    };

    return (
        <>
            <Box sx={{ width: "fit-content" }}>
                <Stack
                    direction="row"
                    sx={{
                        border: "1px solid black",
                        borderRadius: "999px",
                        display: "flex",
                        padding: "0px 12px",
                    }}
                    spacing={1}
                >
                    <Image
                        src={tag2icon[name]}
                        alt={tag2icon[name]}
                        width={20}
                        height={20}
                        quality={100}
                        objectFit="contain"
                        objectPosition="center"
                    />
                    {tag2icon[name]}
                    <Typography>{name}</Typography>
                </Stack>
            </Box>
        </>
    );
}
