import { Meta, StoryObj } from "@storybook/react";

import { ImageViewer } from "./ImageViewer";

export default {
    title: "Web/Asset/ImageViewer",
    component: ImageViewer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof ImageViewer>;

export const Default: StoryObj<typeof ImageViewer> = {
    args: {
        url: "",
    },
};
