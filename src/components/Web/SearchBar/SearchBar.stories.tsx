import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { SearchBar } from "./SearchBar";

export default {
    title: "Web/SearchBar",
    component: SearchBar,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof SearchBar>;

export const Default: StoryObj<typeof SearchBar> = {};
