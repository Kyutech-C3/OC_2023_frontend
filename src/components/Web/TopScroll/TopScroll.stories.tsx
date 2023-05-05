import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { TopScroll } from "./TopScroll";

export default {
  title: "Web/TopScroll",
  component: TopScroll,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof TopScroll>;

const Template: ComponentStory<typeof TopScroll> = () => <TopScroll  />;
export const Default = Template.bind({});
Default.args = {

};
