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
                position: "absolute",
                right: "0",
                bgcolor: "gray",
                borderRadius: "20px 0 0 20px",
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
                        href="/web"
                    >
                        <Image
                            src="https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg"
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
