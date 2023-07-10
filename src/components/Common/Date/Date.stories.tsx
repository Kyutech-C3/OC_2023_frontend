import { Meta, StoryObj } from "@storybook/react";
import Date from "./Date";

export default {
    title: "Common/Date",
    component: Date,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Date>;

export const Default: StoryObj<typeof Date> = {
    args: {
        dateString: "2023-05-03T17:50:56.348000",
    },
};
