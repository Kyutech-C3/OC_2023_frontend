import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const SideBar = () => {
    return (
        <Box component="div" sx={{ position: "relative" }}>
            <Image
                alt="sidebar top"
                src="image/illust/sidebarTop.png"
                style={{ position: "fixed", top: "10%", left: -2 }}
                width={70}
                height={70}
            />
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
            <Image
                alt="sidebar down"
                src="image/illust/sidebarDown.png"
                style={{ position: "fixed", top: "90%", rotate: "90deg" }}
                width={50}
                height={50}
            />
        </Box>
    );
};
