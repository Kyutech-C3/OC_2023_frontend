import { Meta, StoryObj } from "@storybook/react";

import { TopBackground } from "./TopBackground";

export default {
    title: "Web/TopBackground",
    component: TopBackground,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof TopBackground>;

export const Default: StoryObj<typeof TopBackground> = {
    args: {
        hovering: "hack",
    },
};
