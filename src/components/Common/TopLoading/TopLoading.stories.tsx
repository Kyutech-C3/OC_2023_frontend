import { Meta, StoryObj } from "@storybook/react";

import { TopLoading } from "./TopLoading";

export default {
    title: "Common/TopLoading",
    component: TopLoading,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof TopLoading>;

export const Default: StoryObj<typeof TopLoading> = {};
