import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { SideBar } from "./SideBar";

export default {
  title: "Web/SideBar",
  component: SideBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => <SideBar  />;
export const Default = Template.bind({});
Default.args = {

};
