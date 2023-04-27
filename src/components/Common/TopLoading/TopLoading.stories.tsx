import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { TopLoading } from "./TopLoading";

export default {
  title: "Common//TopLoading",
  component: TopLoading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof TopLoading>;

const Template: ComponentStory<typeof TopLoading> = () => <TopLoading  />;
export const Default = Template.bind({});
Default.args = {

};
