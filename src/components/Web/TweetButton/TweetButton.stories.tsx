import { ComponentMeta, ComponentStory } from "@storybook/react";

import { TweetButton } from "./TweetButton";

export default {
    title: "web/TweetButton",
    component: TweetButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof TweetButton>;

const Template: ComponentStory<typeof TweetButton> = (args) => (
    <TweetButton {...args} />
);
export const Default = Template.bind({});
Default.args = {
    size: "small",
    text: "this is test",
};
