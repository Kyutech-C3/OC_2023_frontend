import { useLocalStorage } from "@/hooks/common";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export type FavoriteProps = {
    workId: string;
    favoriteUsersProps: string[];
};

export const Favorite = ({ workId, favoriteUsersProps }: FavoriteProps) => {
    const { getLocalStorage } = useLocalStorage();
    const [favoriteUsers, setFavoriteUsers] =
        useState<string[]>(favoriteUsersProps);
    const userId = getLocalStorage("userId") ?? uuidv4();
    // TODO: バックエンドが完成したらリクエストを送るように実装追加
    const handleFavorite = async () => {
        try {
            // const response = await axios.post("url", { userId, workId });
            // if (response.status == 200) {
            if (favoriteUsers.includes(userId)) {
                setFavoriteUsers((_favoriteUser) =>
                    _favoriteUser.filter((user) => user != userId)
                );
            } else {
                setFavoriteUsers([...favoriteUsers, userId]);
            }
            // } else {
            //     console.log(response.statusText);
            // }
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <Box component="div" sx={{ height: "40px" }}>
            <IconButton onClick={() => handleFavorite()}>
                {favoriteUsers.includes(userId) ? (
                    // {favoriteUsers.includes(userId) && (
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
        </Box>
    );
};
