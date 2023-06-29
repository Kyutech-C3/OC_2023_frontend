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
    const fontSize = ["13vw", "11vw", "9vw", "7vw", "5vw", "4vw", "3vw"];

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
