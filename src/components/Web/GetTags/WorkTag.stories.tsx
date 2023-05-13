import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { WorkTag } from "./WorkTag";

export default {
    title: "Web/WorkTag",
    component: WorkTag,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof WorkTag>;

const Template: ComponentStory<typeof WorkTag> = (args) => (
    <WorkTag {...args} />
);
export const Default = Template.bind({});
Default.args = {
    tagLink: "",
    tagName: "",
};
