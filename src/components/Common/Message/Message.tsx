import { Typography } from "@mui/material";

const Message = () => {
    const text = "Message";
    const characters = text.split(""); // テキストを1文字ずつに分割
    const colors = [
        "#64F161",
        "#FFE600",
        "#7AFFA7",
        "#FFB800",
        "#BCFFD3",
        "#FFE587",
        "#BCFFD3",
    ];
    const fontSize = [
        "155em",
        "145em",
        "135em",
        "130em",
        "120em",
        "110em",
        "105em",
    ];

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

export default Message;
