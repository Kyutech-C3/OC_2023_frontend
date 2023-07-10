import { Meta, StoryObj } from "@storybook/react";

import { TopScroll } from "./TopScroll";

export default {
    title: "Web/TopScroll",
    component: TopScroll,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof TopScroll>;

export const Default: StoryObj<typeof TopScroll> = {};
