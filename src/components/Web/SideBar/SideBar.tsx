import { Box, Typography } from "@mui/material";

export const SideBar = () => {
    return (
        <Box component="div">
            <Typography
                variant="h4"
                sx={{
                    textOrientation: "mixed",
                    writingMode: "vertical-lr",
                    color: "#FFECAD",
                    position: "fixed",
                    top: "20%",
                }}
            >
                CompositeComputerClub
            </Typography>
        </Box>
    );
};
