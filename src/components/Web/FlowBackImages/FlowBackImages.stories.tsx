import { Meta, StoryObj } from "@storybook/react";

import { FlowBackImages } from "./FlowBackImages";

export default {
  title: "Web/FlowBackImages",
  component: FlowBackImages,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof FlowBackImages>;

export const Default: StoryObj<typeof FlowBackImages> = {};
