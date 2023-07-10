
import { Meta, StoryObj } from "@storybook/react";
import { WorkTag } from "./WorkTag";

export default {
    title: "Web/WorkTag",
    component: WorkTag,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof WorkTag>;

export const Default: StoryObj<typeof WorkTag> = { args: { name: "hoge" } }
