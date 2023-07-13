import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

export const SideBar = () => {
    const [isTop, setIsTop] = useState<boolean>(false);
    const isSmall = useMediaQuery("(min-width:600px)");

    const onScroll = () => {
        if (window.pageYOffset > window.innerHeight) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
    };
    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return (): void => document.removeEventListener("scroll", onScroll);
    });
    return (
        <Box
            component="div"
            sx={{
                position: isTop ? "fixed" : "absolute",
                zIndex: 100,
                top: isTop ? "50%" : "150vh",
                transform: "translateY(-50%)",
            }}
        >
            <Stack>
                <Image
                    alt="sidebar top"
                    src="/image/illust/sidebarTop.png"
                    style={{ marginBottom: "-10px" }}
                    width={isSmall ? 70 : 50}
                    height={isSmall ? 70 : 50}
                />
                <Typography
                    variant={isSmall ? "h4" : "h6"}
                    sx={{
                        textOrientation: "mixed",
                        writingMode: "vertical-lr",
                        color: "#FFECAD",
                    }}
                >
                    CompositeComputerClub
                </Typography>
                <Image
                    alt="sidebar down"
                    src="/image/illust/sidebarDown.png"
                    style={{ rotate: "90deg", marginLeft: -11 }}
                    width={isSmall ? 50 : 35}
                    height={isSmall ? 50 : 35}
                />
            </Stack>
        </Box>
    );
};
