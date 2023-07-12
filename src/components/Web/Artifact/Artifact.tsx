import Date from "@/components/Common/Date/Date";
import { getCategory } from "@/libs/getCategory";
import { Work } from "@/types/common";
import {
    Box,
    Button,
    CardMedia,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
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
    const imageDisplaySize = { width: 160, height: 100 };

    return (
        <Button
            sx={{
                border: "2px solid",
                Top: "10%",
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
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={thumbnail.url}
                            sx={{
                                objectFit: "contain",
                                position: "relative",
                                width: isSmall ? "15vw" : "40vw",
                                height: isSmall ? "35vh" : "20vh",
                            }}
                        />
                    </Box>
                    {isSmall && (
                        <Box
                            component="div"
                            sx={{
                                p: 1,
                                width: "200px",
                                height: "100px",
                                overflow: "auto",
                            }}
                        >
                            <WorkTags tags={tags} />
                        </Box>
                    )}
                </Stack>
                <div style={{ width: "9vw", height: "15vw" }}>
                    <Stack
                        spacing={1}
                        sx={{ width: isSmall ? "10vw" : "30vw" }}
                    >
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
                        {!isSmall && (
                            <Box
                                component="div"
                                sx={{
                                    p: 1,
                                    width: "100%",
                                    height: "100px",
                                    overflow: "auto",
                                }}
                            >
                                <WorkTags tags={tags} />
                            </Box>
                        )}
                    </Stack>
                </div>
            </Stack>
        </Button>
    );
};
