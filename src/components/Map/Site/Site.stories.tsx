import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { Site } from "./Site";

export default {
  title: "Map/Site",
  component: Site,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof Site>;

const Template: ComponentStory<typeof Site> = () => <Site />;
export const Default = Template.bind({});
Default.args = {

};
