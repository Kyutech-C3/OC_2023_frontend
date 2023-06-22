import { Meta, StoryObj } from "@storybook/react";

import { SurveyLink } from "./SurveyLink";

export default {
  title: "Web/SurveyLink",
  component: SurveyLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as Meta<typeof SurveyLink>;

export const Default: StoryObj<typeof SurveyLink> = {};
