import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { TopTitle } from "./TopTitle";

export default {
  title: "Web/TopTitle",
  component: TopTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof TopTitle>;

const Template: ComponentStory<typeof TopTitle> = () => <TopTitle  />;
export const Default = Template.bind({});
Default.args = {

};
