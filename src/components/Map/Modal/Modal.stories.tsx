import { Meta, StoryObj } from "@storybook/react";

import { Modal } from "./Modal";

export default {
    title: "Map/Modal",
    component: Modal,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Modal>;

export const Default: StoryObj<typeof Modal> = {
    args: {
        category: "Hello, storybook!",
    },
};
