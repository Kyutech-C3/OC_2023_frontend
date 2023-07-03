import Date from "@/components/Common/Date/Date";
import { getCategory } from "@/libs/getCategory";
import { Work } from "@/types/common";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { WorkTags } from "../Tags/WorkTags";
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
                height: isSmall ? "35vh" : "45vh",
                width: isSmall ? "30vw" : "60vw",
                borderRadius: "10px",
            }}
            variant="contained"
            href={`/web/artifact/${category}/${id}`}
            color={category}
        >
            <Stack direction={isSmall ? "row" : "column"} spacing={2}>
                <Stack
                    sx={{ width: isSmall ? "15vw" : "40vw" }}
                    alignSelf={"center"}
                >
                    <Box
                        component="div"
                        sx={{
                            width: "100%",
                            position: "relative",
                            height: isSmall ? "15vh" : "15vh",
                        }}
                    >
                        <Image
                            src={thumbnail.url}
                            layout="fill"
                            objectFit="contain"
                            alt={thumbnail.url}
                        />
                    </Box>
                    {isSmall && <Box component="div" sx={{ p: 1, width: "200px", height: "100px", overflow: "auto" }}><WorkTags tags={tags} /></Box>}
                </Stack>
                <Stack spacing={1} sx={{ width: isSmall ? "10vw" : "30vw" }}>
                    <Box component="div">
                        <Typography variant="body2">タイトル</Typography>
                        <Typography variant="body2" textAlign="end">
                            {title.length > 10
                                ? title.substring(0, 10) + "..."
                                : title}
                        </Typography>
                    </Box>
                    <Box component="div">
                        <Typography
                            variant="body2"
                            sx={{ alignSelf: "center" }}
                        >
                            製作者
                        </Typography>
                        <Stack direction="row">
                            <Box component="div" flexGrow={1} />
                            <UserCard {...user} size="small" />
                        </Stack>
                    </Box>
                    <Box component="div">
                        <Typography variant="caption">投稿日</Typography>
                        <Stack direction="row">
                            <Box component="div" flexGrow={1} />
                            <Date dateString={createdAt} />
                        </Stack>
                    </Box>
                    {!isSmall && <Box component="div" sx={{ p: 1, width: "100%", height: "100px", overflow: "auto" }}><WorkTags tags={tags} /></Box>}
                </Stack>
            </Stack>
        </Button >
    );
};
