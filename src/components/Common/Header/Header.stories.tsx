import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

export default {
    title: "Common/Header",
    component: Header,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {};
