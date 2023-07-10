import { Meta, StoryObj } from "@storybook/react";

import { MarkdownViewer } from "./MarkdownViewer";

export default {
    title: "Web/MarkdownViewer",
    component: MarkdownViewer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof MarkdownViewer>;
export const Default: StoryObj<typeof MarkdownViewer> = {
    args: {
        rawText: "",
    },
};
