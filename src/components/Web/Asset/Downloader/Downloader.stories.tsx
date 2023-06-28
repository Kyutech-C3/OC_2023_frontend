import { Meta, StoryObj } from "@storybook/react";

import { Downloader } from "./Downloader";

export default {
    title: "Web/Asset/Downloader",
    component: Downloader,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Downloader>;

export const Default: StoryObj<typeof Downloader> = {
    args: {
        url: "",
    },
};
