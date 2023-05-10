import { ButtonProps } from "@mui/material";

export type TweetButtonProps = {
    text: string;
    size: "small" | "medium" | "large";
};

export type ScrollButtonProps = {
    text: string;
    color: ButtonProps["color"];
};

export type FooterButtonType = {
    name: string;
    iconElement: JSX.Element;
    linkPath: string;
};
