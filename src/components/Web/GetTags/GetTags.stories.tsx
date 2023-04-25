import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { GetTags } from "./GetTags";

export default {
  title: "Web/GetTags",
  component: GetTags,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof GetTags>;

const Template: ComponentStory<typeof GetTags> = ( args  ) => <GetTags  {...args}   />;
export const Default = Template.bind({});
Default.args = {

  str: "Hello, storybook!",

};
