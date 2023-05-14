import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { ShowWorkTag } from "./ShowTags";

export default {
    title: "Web/ShowTags",
    component: ShowWorkTag,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof ShowTags>;

const Template: ComponentStory<typeof ShowTags> = (args) => (
    <ShowWorkTag {...args} />
);
export const Default = Template.bind({});
Default.args = {};
