import { AppBar, Box, Typography } from "@mui/material";

export const Header = () => {
    return (
        <AppBar sx={{ backgroundColor: "#ffffff00", boxShadow: "none" }}>
            <Box ml={8} component="div">
                <Typography variant="h3">C3 OpenCampus 2023</Typography>
            </Box>
        </AppBar>
    );
};
