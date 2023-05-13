import { WorkTagProps } from "@/types/web";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";

export function WorkTag({ tagLink, tagName }: WorkTagProps) {
    return (
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
                    src={tagLink}
                    alt={tagLink}
                    width={20}
                    height={20}
                    quality={100}
                    objectFit="contain"
                    objectPosition="center"
                />
                <Typography>{tagName}</Typography>
            </Stack>
        </Box>
    );
}
