import { ButtonProps } from "@mui/material";
import React from "react";

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
    iconElement: React.ReactNode;
    linkPath: string;
};
export type MarkdownViewerProps = {
    rawText: string;
};

export type LinkRendererProps = {
    href: string | undefined;
    children: React.ReactNode;
};
