import { Meta, StoryObj } from "@storybook/react";

import { NavigationBar } from "./NavigationBar";

export default {
  title: "Common/NavigationBar",
  component: NavigationBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof NavigationBar>;

export const Default: StoryObj<typeof NavigationBar> = {};
