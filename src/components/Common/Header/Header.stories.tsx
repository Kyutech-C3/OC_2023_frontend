import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header  />;
export const Default = Template.bind({});
Default.args = {

};
