import Date from "@/components/Common/Date/Date";
import { getUserId } from "@/libs/getUserId";
import { Comment } from "@/types/common";
import { Delete } from "@mui/icons-material";
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    Stack,
    Typography
} from "@mui/material";
import axios from "axios";
import React, { SetStateAction, useEffect, useState } from "react";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";

const CommentOne = ({
    user_id,
    user_name,
    work_id,
    comment,
    comment_id,
    created_at,
    localUserId,
    setDeleteCommentId,
}: Comment & {
    localUserId: string;
    setDeleteCommentId: React.Dispatch<SetStateAction<string>>;
}) => {
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
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ height: "20px" }}
            >
                <Typography variant="body1" flexGrow={1}>
                    {user_name}さん
                </Typography>
                {localUserId == user_id && (
                    <IconButton onClick={() => setDeleteCommentId(comment_id)}>
                        <Delete />
                    </IconButton>
                )}
                <Date dateString={created_at} size="s" />
            </Stack>
            <Typography
                variant="body1"
                sx={{
                    pl: "2vw",
                    whiteSpace: "pre-wrap",
                }}
            >
                {comment}
            </Typography>
        </Stack>
    );
};

export const Comments = ({ comments }: { comments: Comment[] }) => {
    const [userId, setUserId] = useState("");
    const [deleteCommentId, setDeleteCommentId] = useState("");
    useEffect(() => {
        setUserId(getUserId());
    }, []);
    const handleDeleteComment = async () => {
        try {
            console.log(deleteCommentId, userId)
            await axios.delete(
                process.env.NEXT_PUBLIC_BACKEND_API! + "/api/v1/comments",
                { data: { user_id: userId, comment_id: deleteCommentId } }
            );
            setDeleteCommentId("")
        } catch (err) {
            console.log(err);
            setDeleteCommentId("")

        }
    };
    return (
        <Box component="div">
            <ConfirmModal
                handleConfirm={handleDeleteComment}
                closeModal={() => setDeleteCommentId("")}
                isOpen={deleteCommentId !== ""}
            />
            <List>
                {comments?.map((comment: Comment) => (
                    <ListItem key={comment.comment_id}>
                        <CommentOne
                            {...comment}
                            localUserId={userId}
                            setDeleteCommentId={setDeleteCommentId}
                        />
                        <Divider />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
