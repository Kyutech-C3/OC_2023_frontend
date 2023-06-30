import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Map/Avatar",
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof Avatar>;

export const Default: StoryObj<typeof Avatar> = {};
