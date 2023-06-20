import { ComponentMeta, ComponentStory } from "@storybook/react";

import Message from "./Message";

export default {
    title: "Message",
    component: Message,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = () => <Message />;
export const Default = Template.bind({});
Default.args = {};
