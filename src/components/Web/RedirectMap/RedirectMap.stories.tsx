import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { RedirectMap } from "./RedirectMap";

export default {
  title: "Web/RedirectMap",
  component: RedirectMap,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof RedirectMap>;

const Template: ComponentStory<typeof RedirectMap> = () => <RedirectMap  />;
export const Default = Template.bind({});
Default.args = {

};
