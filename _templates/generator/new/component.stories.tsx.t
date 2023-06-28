---
to: <%= abs_path %>/<%=name%>.stories.tsx
---
import { Meta, StoryObj } from "@storybook/react";

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
} as Meta<typeof <%= name %>>;

export const Default: StoryObj<typeof <%= name %>> = {<% if (have_props) { %>
  args:{
    str: "Hello, storybook!",
  }
<%}%>};
