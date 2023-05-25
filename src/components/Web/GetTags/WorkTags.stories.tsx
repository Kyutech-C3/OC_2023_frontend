import { ComponentMeta, ComponentStory } from "@storybook/react";

import { WorkTags } from "./WorkTags";

export default {
    title: "WorkTags",
    component: WorkTags([]),
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as unknown as ComponentMeta<typeof WorkTags>;

const Template: ComponentStory<typeof WorkTags> = (args) => (
    <WorkTags {...args} />
);

export const Default = Template.bind({});
Default.args = [];
