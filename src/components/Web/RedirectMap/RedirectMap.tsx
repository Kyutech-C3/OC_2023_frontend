import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Box, Collapse, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export const RedirectMap = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box
            component="div"
            sx={{
                position: "fixed",
                right: "0",
                bgcolor: "gray",
                borderRadius: "20px 0 0 20px",
                zIndex: 1000,
            }}
            onMouseOver={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <Collapse in={isOpen} collapsedSize={30} orientation="horizontal">
                <Stack direction="row">
                    <Box
                        component="div"
                        sx={{ width: "30px", alignSelf: "center" }}
                    >
                        <IconButton sx={{ padding: "5px", color: "white" }}>
                            {isOpen ? (
                                <KeyboardDoubleArrowRightIcon />
                            ) : (
                                <KeyboardDoubleArrowLeftIcon />
                            )}
                        </IconButton>
                    </Box>

                    <Link
                        style={{
                            width: "200px",
                            height: "120px",
                        }}
                        href="/map"
                    >
                        {/* TODO:画像の差し替え */}
                        <Image
                            src="https://s3.ap-northeast-2.wasabisys.com/toybox/assets/image/87f05c92-06b1-4418-a8a0-1fc8034a090b/origin.png"
                            width={200}
                            height={100}
                            alt="map"
                            style={{ marginTop: "10px" }}
                        />
                    </Link>
                </Stack>
            </Collapse>
        </Box>
    );
};
