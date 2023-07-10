import { User as UserProps } from "@/types/common";
import { Avatar, Stack, Typography } from "@mui/material";

export const UserCard = ({
    display_name: disPlayName,
    avatar_url: avatarUrl,
    size,
}: Pick<UserProps, "display_name" | "avatar_url"> & {
    size: "small" | "medium" | "large";
}) => {
    return (
        <Stack
            direction="row"
            spacing={size == "small" ? 1 : size == "medium" ? 2 : 3}
        >
            <Avatar
                src={avatarUrl}
                sx={{
                    width: size == "small" ? 25 : size == "medium" ? 50 : 75,
                    height: size == "small" ? 25 : size == "medium" ? 50 : 75,
                    border: "1px solid #aaaaaadd",
                }}
            />
            <Typography
                variant={
                    size == "small" ? "body1" : size == "medium" ? "h5" : "h4"
                }
                sx={{ alignSelf: "center" }}
            >
                {disPlayName}
            </Typography>
        </Stack>
    );
};
