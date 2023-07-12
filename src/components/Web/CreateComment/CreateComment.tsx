import { getUserId } from "@/libs/getUserId";
import SendIcon from "@mui/icons-material/Send";
import {
    Alert,
    Box,
    Button,
    Grid,
    Stack,
    TextareaAutosize,
    TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
export const CreateComment = ({ workId }: { workId: string }) => {
    const [userId, setUserId] = useState("");
    const [formValue, setFormValue] = useState({
        userName: "名無し",
        comment: "",
    });
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        setUserId(getUserId());
    }, []);
    const handleComment = async () => {
        if (formValue.comment === "") {
            return;
        }
        try {
            await axios.post(
                process.env.NEXT_PUBLIC_BACKEND_API! + "/api/v1/comments",
                {
                    user_id: userId,
                    work_id: workId,
                    user_name: formValue.userName,
                    comment: formValue.comment,
                }
            );
            setFormValue({ ...formValue, comment: "" });
            setAlertMessage("送信しました！");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Stack
            spacing={2}
            sx={{
                p: 2,
                borderRadius: "10px",
                backgroundColor: "primary.light",
            }}
        >
            <TextField
                name="userName"
                onChange={handleChange}
                label="ユーザー名"
                defaultValue={formValue.userName}
                sx={{ backgroundColor: "#ffffff88", borderRadius: "5px" }}
                color="secondary"
            />
            <TextareaAutosize
                onChange={handleChange}
                name="comment"
                style={{
                    height: "200px",
                    borderRadius: "10px",
                    backgroundColor: "#ffffff88",
                }}
            />
            <Grid container justifyContent="space-between">
                <Box component="div">
                    {alertMessage != "" && (
                        <Alert
                            onClose={() => setAlertMessage("")}
                            color="success"
                        >
                            {alertMessage}
                        </Alert>
                    )}
                </Box>

                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<SendIcon />}
                    onClick={handleComment}
                    sx={{ py: 1 }}
                >
                    送信
                </Button>
            </Grid>
        </Stack>
    );
};
