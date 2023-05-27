import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Player } from "./Player";

export default {
    title: "Web/Player",
    component: Player,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Player>;

const Template: ComponentStory<typeof Player> = (args) => <Player {...args} />;
export const Default = Template.bind({});
Default.args = {
    url: "",
};
