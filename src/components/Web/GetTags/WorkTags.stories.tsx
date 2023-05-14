import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WorkTags } from "./WorkTags";

export default {
    title: "Web/ShowTags",
    component: WorkTags,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof ShowTags>;

const Template: ComponentStory<typeof ShowTags> = (args) => (
    <WorkTags {...args} />
);
export const Default = Template.bind({});
Default.args = {};
