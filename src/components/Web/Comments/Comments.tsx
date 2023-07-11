import Date from "@/components/Common/Date/Date";
import { getUserId } from "@/libs/getUserId";
import { Comment } from "@/types/common";
import { Delete } from "@mui/icons-material";
import {
    Divider,
    IconButton,
    List,
    ListItem,
    Stack,
    Typography
} from "@mui/material";
import { useEffect, useState } from "react";

const CommentOne = ({
    user_id,
    user_name,
    work_id,
    comment,
    comment_id,
    created_at,
    localUserId,
}: Comment & { localUserId: string }) => {
    return (
        <Stack
            spacing={2}
            sx={{
                border: "2px solid",
                borderColor: "secondary.main",
                borderRadius: "10px",
                p: 2,
                width: "300px",
            }}
        >
            <Stack direction="row" spacing={1} alignItems="center" sx={{ height: "20px" }}>
                <Typography variant="body1" flexGrow={1}>
                    {user_name}さん
                </Typography>
                {localUserId == user_id && (
                    <IconButton>
                        <Delete />
                    </IconButton>
                )}
                <Date dateString={created_at} size="s" />
            </Stack>
            <Typography variant="body1" sx={{
                pl: "2vw", whiteSpace: "pre-wrap",
            }}>
                {comment}
            </Typography>
        </Stack>
    );
};

export const Comments = ({ comments }: { comments: Comment[] }) => {
    const [userId, setUserId] = useState("");
    useEffect(() => {
        setUserId(getUserId());
    }, []);
    return (
        <List>
            {comments.map((comment: Comment) => (
                <ListItem key={comment.comment_id}>
                    <CommentOne
                        {...comment}
                        localUserId={"8bf9b5c1-3201-4b56-ba42-8f90880b69e4"}
                    />
                    <Divider />
                </ListItem>
            ))}
        </List>
    );
};
