import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { FooterIcons } from "./FooterIcons";

export default {
  title: "Common/FooterIcons",
  component: FooterIcons,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof FooterIcons>;

const Template: ComponentStory<typeof FooterIcons> = () => <FooterIcons  />;
export const Default = Template.bind({});
Default.args = {

};
