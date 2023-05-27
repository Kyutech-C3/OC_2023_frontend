import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { MarkdownViewer } from "./MarkdownViewer";

export default {
    title: "Web/MarkdownViewer",
    component: MarkdownViewer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof MarkdownViewer>;

const Template: ComponentStory<typeof MarkdownViewer> = (args) => (
    <MarkdownViewer {...args} />
);
export const Default = Template.bind({});
Default.args = {
    rawText: "",
};
