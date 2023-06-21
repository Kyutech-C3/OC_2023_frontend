import { Meta, StoryObj } from "@storybook/react";

import { TweetButton } from "./TweetButton";

export default {
    title: "Common/TweetButton",
    component: TweetButton,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof TweetButton>;

export const Default: StoryObj<typeof TweetButton> = {
    args: {
        size: "small",
        text: "this is test",
    },
};
