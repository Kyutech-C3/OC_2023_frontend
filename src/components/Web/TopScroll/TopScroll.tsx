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
