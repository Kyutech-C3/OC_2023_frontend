import Date from "@/components/Common/Date/Date";
import { getCategory } from "@/libs/getCategory";
import { Work } from "@/types/common";
import {
    Box,
    Button,
    Card,
    CardContent,
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
    return (
        <Button href={`/web/artifact/${category}/${id}`}>
            <Card
                sx={{
                    display: isSmall ? "flex" : "",
                    width: isSmall ? "400px" : "300px",
                    height: isSmall ? "300px" : "400px",
                    border: "2px solid",
                    borderColor: `${category}.dark`,
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: isSmall ? "200px" : "300px",
                        height: isSmall ? "300px" : "200px",
                    }}
                    image={thumbnail.url}
                    alt="Live from space album cover"
                />
                <CardContent
                    sx={{
                        width: isSmall ? "200px" : "300px",
                        backgroundColor: `${category}.main`,
                    }}
                >
                    <Stack spacing={2}>
                        <Typography
                            sx={{
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                            }}
                        >
                            {title}
                        </Typography>
                        <UserCard
                            display_name={user.display_name}
                            avatar_url={user.avatar_url}
                            size="small"
                        />
                        <Stack direction="row">
                            <Typography>投稿日</Typography>:
                            <Date dateString={createdAt} size="s" />
                        </Stack>
                        <Box
                            component="div"
                            sx={{ overflow: "scroll", height: "200px" }}
                        >
                            <WorkTags tags={tags} />
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Button>
    );
};
