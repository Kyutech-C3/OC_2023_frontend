import { Meta, StoryObj } from "@storybook/react";

import { TopTitle } from "./TopTitle";

export default {
    title: "Web/TopTitle",
    component: TopTitle,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof TopTitle>;

export const Default: StoryObj<typeof TopTitle> = {
    args: {},
};
