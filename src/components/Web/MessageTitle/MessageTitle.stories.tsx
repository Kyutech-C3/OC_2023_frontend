import { Meta, StoryObj } from "@storybook/react";

import MessageTitle from "./MessageTitle";

export default {
    title: "Web/MessageTitle",
    component: MessageTitle,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof MessageTitle>;

export const Default: StoryObj<typeof MessageTitle> = {};
