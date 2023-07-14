import { Meta, StoryObj } from "@storybook/react";

import { Socket } from "./Socket";

export default {
  title: "Map/Socket",
  component: Socket,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof Socket>;

export const Default: StoryObj<typeof Socket> = {};
