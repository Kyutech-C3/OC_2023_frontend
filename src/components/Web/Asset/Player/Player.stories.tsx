import { Meta, StoryObj } from "@storybook/react";

import { Player } from "./Player";

export default {
    title: "Web/Asset/Player",
    component: Player,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Player>;

export const Default: StoryObj<typeof Player> = {
    args: {
        url: "",
    },
};
