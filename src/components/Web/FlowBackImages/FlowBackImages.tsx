import { imagePaths } from "@/constants/flowImages";
import { Box } from "@mui/material";

export const FlowBackImages = () => {
    return (
        <Box
            component="div"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
                overflow: "hidden",
            }}
        >
            {imagePaths.map((imageCells, indexs) => (
                <>
                    {imageCells.map((imageCell, index) => (
                        <Box
                            component="div"
                            sx={{
                                rotate: "10deg",
                                position: "absolute",
                                top: `${indexs * 30}%`,
                                right: "-25%",
                                width: "25%",
                                height: "25%",
                                backgroundImage: `url(${imageCell})`,
                                backgroundSize: "cover",
                                animation:
                                    "scrollBackground 4s linear infinite",
                                animationDelay: `${indexs * 0.5 + index}s`,
                                "@keyframes scrollBackground": {
                                    "0%": {
                                        transform: "translateX(0%)",
                                    },
                                    "100%": {
                                        transform: "translateX(-500%)",
                                    },
                                },
                            }}
                        ></Box>
                    ))}
                </>
            ))}
        </Box>
    );
};
