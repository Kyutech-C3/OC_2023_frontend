import { Meta, StoryObj } from "@storybook/react";

import { OwnerComment } from "./OwnerComment";

export default {
  title: "Web/OwnerComment",
  component: OwnerComment,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof OwnerComment>;

export const Default: StoryObj<typeof OwnerComment> = {};
