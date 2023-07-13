import { TweetButtonProps } from "@/types/web";
import { Button, Typography, TypographyTypeMap } from "@mui/material";
import Image from "next/image";
const size2int = {
    small: 24,
    medium: 36,
    large: 38,
};
const size2captionSize: Record<string, TypographyTypeMap["props"]["variant"]> =
{
    small: "h6",
    medium: "h5",
    large: "h4",
};
export const TweetButton = ({ size, text }: TweetButtonProps) => {
    return (
        <Button
            sx={{
                color: "white",
                backgroundColor: "#1DA1F2",
                borderRadius: "999px",
                px: 2,
                ":hover": {
                    backgroundColor: "#28ABFB",
                },
                width: size == "small" ? "200px" : size == "medium" ? "250px" : "300px",
            }}
            href={`http://twitter.com/intent/tweet?hashtags=C3OpenCanpas2023&text=${text}`}
        >
            <Image
                src="/image/icon/twitter-white.svg"
                width={size2int[size]}
                height={size2int[size]}
                alt="tweet"
            />
            <Typography ml={2} variant={size2captionSize[size]}>
                ツイートする
            </Typography>
        </Button>
    );
};
