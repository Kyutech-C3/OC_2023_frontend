import { topLoadingAtom } from "@/state/topLoading";
import { Box, Slide, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export const TopLoading = () => {
    const [{ isLoading, message }, setTopLoadingState] =
        useRecoilState(topLoadingAtom);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTopLoadingState({ isLoading: false, message: "" });
        }, 5000);
        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <Slide in={isLoading} timeout={1000}>
            <Box
                component="div"
                sx={{
                    zIndex: 100,
                    display: "flex",
                    justifyContent: "center",
                    width: "100vw",
                    height: "100vh",
                }}
            >
                <Stack
                    sx={{ justifyContent: "center", textAlign: "center" }}
                    spacing={3}
                >
                    <Image
                        src="/image/illust/topLoading.gif"
                        alt="toploading"
                        width={300}
                        height={300}
                    />
                    <Typography variant="h4">{message}</Typography>
                </Stack>
            </Box>
        </Slide>
    );
};
