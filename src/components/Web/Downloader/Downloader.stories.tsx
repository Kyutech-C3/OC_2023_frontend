import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Downloader } from "./Downloader";

export default {
    title: "Web/Downloader",
    component: Downloader,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Downloader>;

const Template: ComponentStory<typeof Downloader> = (args) => (
    <Downloader {...args} />
);
export const Default = Template.bind({});
Default.args = {
    url: "",
};
