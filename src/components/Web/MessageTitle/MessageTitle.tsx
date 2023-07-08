import { Typography, Box } from "@mui/material";

const MessageTitle = () => {
  const characters = [
    {
      char: "M",
      color: "#64F161",
      fontSize: "13vw",
    },
    {
      char: "e",
      color: "#FFE600",
      fontSize: "11vw",
    },
    {
      char: "s",
      color: "#7AFFA7",
      fontSize: "9vw",
    },
    {
      char: "s",
      color: "#FFB800",
      fontSize: "8vw",
    },
    {
      char: "a",
      color: "#BCFFD3",
      fontSize: "6vw",
    },
    {
      char: "g",
      color: "#FFE587",
      fontSize: "5vw",
    },
    {
      char: "e",
      color: "#BCFFD3",
      fontSize: "4vw",
    },
  ];

  return (
    <Box display="flex">
      {characters.map(({ char, color, fontSize, fontWeight }, index) => (
        <Typography
          key={index}
          style={{
            color: color,
            fontSize: fontSize,
            fontWeight: "bold",
          }}
        >
          {char}
        </Typography>
      ))}
    </Box>
  );
};

export default MessageTitle;
