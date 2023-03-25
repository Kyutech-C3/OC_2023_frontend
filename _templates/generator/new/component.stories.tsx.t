---
to: <%= abs_path %>/<%=name%>.stories.tsx
---
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { <%= name %> } from "./<%= name %>";

export default {
  title: "<%= path %>",
  component: <%= name %>,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
  },
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (<% if (have_props) { %> args  <% } %>) => <<%= name %> <% if (have_props) { %> {...args}  <% } %> />;
export const Default = Template.bind({});
Default.args = {
<% if (have_props) { %>
  str: "Hello, storybook!",
<%}%>
};
