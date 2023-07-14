import { Meta, StoryObj } from "@storybook/react";

import { UnityData } from "./UnityData";

export default {
    title: "Map/UnityData",
    component: UnityData,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof UnityData>;

export const Default: StoryObj<typeof UnityData> = {};
