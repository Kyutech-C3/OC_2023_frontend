
import { Meta, StoryObj } from "@storybook/react";
import { WorkTags } from "./WorkTags";

export default {
    title: "Web/WorkTags",
    component: WorkTags,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof WorkTags>;

export const Default: StoryObj<typeof WorkTags> = {}