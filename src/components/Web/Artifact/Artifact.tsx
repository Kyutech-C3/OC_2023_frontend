import Date from "@/components/Common/Date/Date";
import { getCategory } from "@/libs/getCategory";
import { Work } from "@/types/common";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { UserCard } from "../User/UserCard";

export const Artifact = ({
    id,
    title,
    user,
    created_at: createdAt,
    tags,
    thumbnail,
}: Pick<
    Work,
    "id" | "title" | "user" | "created_at" | "tags" | "thumbnail"
>) => {
    const category = getCategory(tags);
    const isSmall = useMediaQuery("(min-width:600px)");
    return (
        <Button
            sx={{
                border: "2px solid",
                height: isSmall ? "30vh" : "40vh",
                width: "35vw",
                borderRadius: "10px",
            }}
            variant="contained"
            href={`/web/artifact/${category}/${id}`}
            color={category}
        >
            <Stack direction={isSmall ? "row" : "column"} spacing={2}>
                <Stack
                    sx={{ width: isSmall ? "15vw" : "20vw" }}
                    alignSelf={isSmall ? "start" : "center"}
                >
                    <Image
                        src={thumbnail.url}
                        layout="responsive"
                        width={100}
                        height={100}
                        alt={thumbnail.url}
                        style={{
                            borderRadius: "5px",
                            border: "1px solid #88888888",
                        }}
                    />
                    {/* TODO:タグコンポーネントを追加する */}
                    {isSmall && <>tag</>}
                </Stack>
                <Stack spacing={1}>
                    <Box>
                        <Typography variant="body2">タイトル</Typography>
                        <Typography variant="body2" textAlign="end">
                            {title}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            variant="body2"
                            sx={{ alignSelf: "center" }}
                        >
                            製作者
                        </Typography>
                        <Stack direction="row">
                            <Box flexGrow={1} />
                            <UserCard {...user} size="small" />
                        </Stack>
                    </Box>
                    <Box>
                        <Typography variant="caption">投稿日</Typography>
                        <Stack direction="row">
                            <Box flexGrow={1} />
                            <Date dateString={createdAt} />
                        </Stack>
                    </Box>
                    {/* TODO:tagコンポーネントを追加する */}
                    {!isSmall && <>tag</>}
                </Stack>
            </Stack>
        </Button>
    );
};
