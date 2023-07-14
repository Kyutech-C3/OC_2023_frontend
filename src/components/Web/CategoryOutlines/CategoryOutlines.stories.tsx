import { Meta, StoryObj } from "@storybook/react";

import { CategoryOutlines } from "./CategoryOutlines";

export default {
  title: "Web/CategoryOutlines",
  component: CategoryOutlines,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof CategoryOutlines>;

export const Default: StoryObj<typeof CategoryOutlines> = {};
