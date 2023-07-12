import { Meta, StoryObj } from "@storybook/react";

import { ConfirmModal } from "./ConfirmModal";

export default {
    title: "Web/ConfirmModal",
    component: ConfirmModal,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
} as Meta<typeof ConfirmModal>;

export const Default: StoryObj<typeof ConfirmModal> = {
    args: {
        isOpen: true,
    }
};
