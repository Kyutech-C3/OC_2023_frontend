import { Meta, StoryObj } from "@storybook/react";

import { RedirectMap } from "./RedirectMap";

export default {
    title: "Web/RedirectMap",
    component: RedirectMap,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof RedirectMap>;

export const Default: StoryObj<typeof RedirectMap> = {};
