import { ScrollButtonProps } from "@/types/web";
import { Box, Button, Stack, Typography } from "@mui/material";
const ScrollButton = ({ text, color }: ScrollButtonProps) => {
    return (
        <Button
            color={color}
            variant="contained"
            sx={{
                height: "20vh",
                width: "25vh",
                justifyContent: "start",
                borderRadius: "0",
                transition: "scale 0.2s",
                ":hover": {
                    scale: "1.2",
                    zIndex: 100,
                    ":before": {
                        width: "100%",
                    },
                },
                overflow: "hidden",
                ":before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 0,
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.3)",
                    transition: "width 0.3s ease",
                },
            }}
            href={`#${text}`}
        >
            <Box
                component="div"
                sx={{
                    width: "1vh",
                    height: "20vh",
                    backgroundColor: "black",
                }}
            />
            <Typography
                variant="h6"
                sx={{
                    fontWeight: 600,
                    textOrientation: "mixed",
                    alignSelf: "start",
                    writingMode: "vertical-lr",
                    mt: 1,
                }}
            >
                {text}
            </Typography>
        </Button>
    );
};

export const TopScroll = () => {
    const categories: ScrollButtonProps[] = [
        { color: "hack", text: "HACK" },
        { color: "game", text: "GAME" },
        { color: "cg2d", text: "2DCG" },
        { color: "cg3d", text: "3DCG" },
        { color: "music", text: "MUSIC" },
    ];
    return (
        <Stack sx={{ width: "20vw" }}>
            {categories.map((category, index) => (
                <ScrollButton key={index} {...category} />
            ))}
        </Stack>
    );
};
