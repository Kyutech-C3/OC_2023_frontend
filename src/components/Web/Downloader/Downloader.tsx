import { Asset } from "@/types/common";
import { Box, Button } from "@mui/material";

export const Downloader = ({ url }: Asset) => {
    return (
        <Button href={url}>
            <Box
                sx={{
                    position: "relative",
                    width: "400px",
                    height: "400px",
                    margin: "auto",
                    marginTop: "150px",
                }}
            >
                <Box
                    sx={{
                        background:
                            "linear-gradient(to right top, #ff3333, #bb3333)",
                        width: "196px",
                        height: "196px",
                        position: "absolute",
                        transform: "skew(16.5deg,16.5deg)",
                        rotate: "-45deg",
                        right: 102,
                        transitionDuration: 100,
                        transitionProperty: "top",
                        top: -105,
                        borderTopRightRadius: "0px",
                        borderRadius: "10px",
                    }}
                >
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to bottom, #ddddcc, #ffffcc)",
                            width: "22px",
                            height: "196px",
                            position: "absolute",
                            right: 85,
                            top: -1,
                            borderColor: "orange",
                            boxShadow: "0.5px -0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to bottom, #dddd00, #ffff00)",
                                width: "16px",
                                height: "196px",
                                ml: "3px",
                                borderLeft: "1px dashed orange",
                                borderRight: "1px dashed orange",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to left, #ddddcc, #ffffcc)",
                            width: "196px",
                            height: "22px",
                            position: "absolute",
                            right: -1,
                            top: 85,
                            borderColor: "orange",
                            boxShadow: "0.5px -0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to left, #dddd00, #ffff00)",
                                width: "196px",
                                height: "16px",
                                mt: "3px",
                                borderTop: "1px dashed orange",
                                borderBottom: "1px dashed orange",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        background:
                            "linear-gradient(to right bottom, #ff3333, #bb3333)",
                        width: "180px",
                        height: "210px",
                        position: "absolute",
                        transform: "skewy(-28deg) ",
                        right: 20,
                        top: 40,
                        borderBottomRightRadius: "10px",
                        borderTopRightRadius: "10px",
                    }}
                >
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to bottom, #ddddcc, #ffffcc)",
                            width: "20px",
                            height: "210px",
                            position: "absolute",
                            right: 80,
                            top: 0,
                            borderColor: "orange",
                            boxShadow: "0.5px 0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to top, #dddd00, #ffff00)",
                                width: "16px",
                                height: "210px",
                                ml: "2px",
                                borderLeft: "1px dashed orange",
                                borderRight: "1px dashed orange",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to top, #ddddcc, #ffffcc)",
                            width: "200px",
                            height: "20px",
                            position: "absolute",
                            right: 0,
                            top: 110,
                            boxShadow: "0.5px 0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to top, #dddd00, #ffff00)",
                                width: "200px",
                                height: "16px",
                                mt: "2px",
                                borderTop: "1px dashed orange",
                                borderBottom: "1px dashed orange",
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        background:
                            "linear-gradient(to left bottom, #ff3333, #bb3333)",
                        width: "180px",
                        height: "210px",
                        position: "absolute",
                        transform: "skewy(28deg) ",
                        right: 200,
                        top: 40,
                        borderBottomLeftRadius: "10px",
                        borderTopLeftRadius: "10px",
                    }}
                >
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to top, #ddddcc, #ffffcc)",
                            width: "20px",
                            height: "210px",
                            position: "absolute",
                            right: 80,
                            top: 0,
                            boxShadow: "0.5px 0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to top, #dddd00, #ffff00)",
                                width: "16px",
                                height: "210px",
                                ml: "2px",
                                borderLeft: "1px dashed orange",
                                borderRight: "1px dashed orange",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            background:
                                "linear-gradient(to top, #ddddcc, #ffffcc)",
                            width: "180px",
                            height: "20px",
                            position: "absolute",
                            right: 0,
                            top: 110,
                            borderColor: "orange",
                            boxShadow: "-0.5px 0.5px 1px black",
                        }}
                    >
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(to top, #dddd00, #ffff00)",
                                width: "180px",
                                height: "16px",
                                mt: "2px",
                                borderTop: "1px dashed orange",
                                borderBottom: "1px dashed orange",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        backgroundColor: "red",
                        width: "180px",
                        height: "200px",
                        position: "absolute",
                        transform: "skewy(-28deg) ",
                        right: 200,
                        top: -55,
                        zIndex: -100,
                        borderRadius: "10px",
                    }}
                />
                <Box
                    sx={{
                        borderRadius: "10px",
                        backgroundColor: "red",
                        width: "180px",
                        height: "200px",
                        position: "absolute",
                        transform: "skewy(28deg) ",
                        right: 20,
                        top: -55,
                        zIndex: -100,
                    }}
                />
            </Box>
        </Button>
    );
};
