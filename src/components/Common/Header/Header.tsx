import { AppBar, Box, Stack, Typography } from "@mui/material";
import { NavigationBar } from "../NavigationBar/NavigationBar";

export const Header = () => {
    return (
        <AppBar
            sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                position: "absolute",
            }}
        >
            <Stack spacing={2} sx={{ pl: 1 }} direction="row">
                <NavigationBar />
                <Box component="div">
                    <Typography sx={{ fontSize: "3vmax", color: "white" }}>
                        C3 OpenCampus 2023
                    </Typography>
                </Box>
            </Stack>
        </AppBar>
    );
};
