import { User as UserProps } from "@/types/common";
import { Avatar, Stack, Typography } from "@mui/material";

export const UserCard = ({
    display_name: disPlayName,
    avatar_url: avatarUrl,
}: Pick<UserProps, "display_name" | "avatar_url">) => {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar src={avatarUrl} sx={{ border: "1px solid #aaaaaadd" }} />
            <Typography variant="h6" sx={{ alignSelf: "center" }}>
                {disPlayName}
            </Typography>
        </Stack>
    );
};
