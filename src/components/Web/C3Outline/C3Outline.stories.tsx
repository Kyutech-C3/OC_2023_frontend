import { Meta, StoryObj } from "@storybook/react";

import { C3Outline } from "./C3Outline";

export default {
  title: "Web/C3Outline",
  component: C3Outline,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof C3Outline>;

export const Default: StoryObj<typeof C3Outline> = {};
