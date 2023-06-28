import { Typography } from "@mui/material";

const MessageTitle = () => {
    const text = "Message";
    const characters = text.split("");
    const colors = [
        "#64F161",
        "#FFE600",
        "#7AFFA7",
        "#FFB800",
        "#BCFFD3",
        "#FFE587",
        "#BCFFD3",
    ];
    const fontSize = ["35vw", "33vw", "31vw", "29vw", "27vw", "25vw", "23vw"];

    return (
        <Typography>
            {characters.map((character, index) => (
                <span
                    key={index}
                    style={{
                        color: colors[index % colors.length],
                        fontSize: fontSize[index % fontSize.length],
                    }}
                >
                    {character}
                </span>
            ))}
        </Typography>
    );
};

export default MessageTitle;
