import SendIcon from '@mui/icons-material/Send';
import { Box, Button, Stack, TextareaAutosize, TextField } from "@mui/material";
export const CreateComment = () => {
    return (
        <Stack spacing={2} sx={{ p: 2, borderRadius: "10px", backgroundColor: "primary.light" }}>
            <TextField label="ユーザー名" defaultValue={"名無し"} sx={{ backgroundColor: "#ffffff88", borderRadius: "5px", }} color="secondary" />
            <TextareaAutosize style={{ height: "200px", borderRadius: "10px", backgroundColor: "#ffffff88" }} />
            <Box component="div" alignSelf="end">
                <Button variant="contained" color="secondary" startIcon={<SendIcon />} > 送信</Button>
            </Box>
        </Stack >
    );
};
