import { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./SideBar";

export default {
    title: "Web/SideBar",
    component: SideBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof SideBar>;

export const Default: StoryObj<typeof SideBar> = {};
