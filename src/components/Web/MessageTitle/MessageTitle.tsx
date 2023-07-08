import { Stack, Typography } from "@mui/material";

const MessageTitle = () => {
    const characters = [
        {
            char: "M",
            color: "#64F161",
            fontSize: "11vw",
        },
        {
            char: "E",
            color: "#FFE600",
            fontSize: "10vw",
        },
        {
            char: "S",
            color: "#7AFFA7",
            fontSize: "9vw",
        },
        {
            char: "S",
            color: "#FFB800",
            fontSize: "8vw",
        },
        {
            char: "A",
            color: "#BCFFD3",
            fontSize: "7vw",
        },
        {
            char: "G",
            color: "#FFE587",
            fontSize: "6vw",
        },
        {
            char: "E",
            color: "#BCFFD3",
            fontSize: "5vw",
        },
    ];

    return (
        <Stack direction="row" sx={{ alignItems: "baseline" }}>
            {characters.map(({ char, color, fontSize }, index) => (
                <Typography
                    key={index}
                    style={{
                        color: color,
                        fontSize: fontSize,
                        height: fontSize,
                        fontWeight: "bold",
                        display: "flex",
                    }}
                >
                    {char}
                </Typography>
            ))}
        </Stack>
    );
};

export default MessageTitle;
