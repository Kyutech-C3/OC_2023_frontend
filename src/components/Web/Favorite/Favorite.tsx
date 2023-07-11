import { getUserId } from "@/libs/getUserId";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export type FavoriteProps = {
    workId: string;
    favoriteUsersProps: string[];
};

export const Favorite = ({ workId, favoriteUsersProps }: FavoriteProps) => {
    const [favoriteUsers, setFavoriteUsers] =
        useState<string[]>(favoriteUsersProps);
    const [userId, setUserId] = useState("")
    const handleFavorite = async () => {
        if (favoriteUsers?.includes(userId)) {
            deleteLike(userId, workId)
        } else {
            postLike(userId, workId)
        }
    };
    const postLike = async (userId: string, workId: string) => {
        try {
            const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_API! + "/api/v1/likes", { "user_id": userId, "work_id": workId });
            if (response.status == 200) {
                setFavoriteUsers([...favoriteUsers, userId]);
            } else {
                console.log(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
    }
    const deleteLike = async (userId: string, workId: string) => {
        try {
            const response = await axios.delete(process.env.NEXT_PUBLIC_BACKEND_API! + "/api/v1/likes", { data: { "user_id": userId, "work_id": workId } });
            if (response.status == 200) {
                setFavoriteUsers((_favoriteUser) =>
                    _favoriteUser.filter((user) => user != userId)
                );
            } else {
                console.log(response.statusText);
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        setUserId(getUserId())

    }, [])
    return (
        <Stack direction="row" sx={{ height: "40px", margin: "auto", alignItems: "center" }}>
            <IconButton onClick={() => handleFavorite()}>
                {favoriteUsers?.includes(userId) ? (
                    <FavoriteIcon
                        sx={{
                            scale: 10,
                            color: "#FF0080",
                            animation: `spin 0.5s ease`,
                            "@keyframes spin": {
                                "0%": {
                                    transform: "rotate(0deg)",
                                },
                                "25%": {
                                    transform: "rotate(30deg)",
                                },
                                "60%": {
                                    transform: "rotate(-30deg)",
                                },
                                "90%": {
                                    transform: "rotate(10deg)",
                                },
                                "100%": {
                                    transform: "rotate(0deg)",
                                },
                            },
                        }}
                    />
                ) : (
                    <FavoriteBorderIcon
                        sx={{
                            animation: `down 0.3s ease`,
                            "@keyframes down": {
                                "0%": {
                                    mt: "0px",
                                },
                                "60%": {
                                    mt: "3px",
                                },
                                "100%": {
                                    mt: "0px",
                                },
                            },
                        }}
                    />
                )}
            </IconButton>
            <Typography variant="body1">{favoriteUsers.length}</Typography>
        </Stack>
    );
};
