import { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./Footer";

export default {
  title: "Common/Footer",
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof Footer>;

export const Default: StoryObj<typeof Footer> = {};
