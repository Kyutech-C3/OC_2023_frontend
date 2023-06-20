import { Typography } from "@mui/material";

const Message = () => {
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
    const fontSize = [
        "155vw",
        "145vw",
        "135vw",
        "130vw",
        "120vw",
        "110vw",
        "105vw",
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
