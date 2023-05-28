import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { SearchBar } from "./SearchBar";

export default {
  title: "Web/SearchBar",
  component: SearchBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = () => <SearchBar  />;
export const Default = Template.bind({});
Default.args = {

};
