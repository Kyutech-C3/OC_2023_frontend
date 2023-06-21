import { Meta, StoryObj } from "@storybook/react";

import { Favorite } from "./Favorite";

export default {
    title: "Web/Favorite",
    component: Favorite,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Favorite>;

export const Default: StoryObj<typeof Favorite> = {
    args: {
        workId: "",
        favoriteUsersProps: [""],
    },
};
