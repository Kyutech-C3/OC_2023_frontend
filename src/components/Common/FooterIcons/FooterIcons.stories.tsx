import { Meta, StoryObj } from "@storybook/react";

import { FooterIcons } from "./FooterIcons";

export default {
    title: "Common/FooterIcons",
    component: FooterIcons,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof FooterIcons>;

export const Default: StoryObj<typeof FooterIcons> = {};
