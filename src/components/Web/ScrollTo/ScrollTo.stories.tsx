import { Meta, StoryObj } from "@storybook/react";

import { ScrollTo } from "./ScrollTo";

export default {
    title: "Web/ScrollTo",
    component: ScrollTo,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof ScrollTo>;

export const Default: StoryObj<typeof ScrollTo> = {
    args: {
        to: "",
    },
};
