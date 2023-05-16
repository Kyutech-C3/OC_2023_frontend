import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { WorkTags } from "./WorkTags";

export default {
    title: "WorkTags",
    component: WorkTags,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof WorkTags>;

const Template: ComponentStory<typeof WorkTags> = () => <WorkTags />;
export const Default = Template.bind({});
Default.args = {};
