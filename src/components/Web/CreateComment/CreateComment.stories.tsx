import { Meta, StoryObj } from "@storybook/react";

import { CreateComment } from "./CreateComment";

export default {
    title: "Web/CreateComment",
    component: CreateComment,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
} as Meta<typeof CreateComment>;

export const Default: StoryObj<typeof CreateComment> = {
    args: {
        workId: "1a75b460-2966-4650-9a5c-55554277016f"
    }
};
