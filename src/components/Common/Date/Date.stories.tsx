import { ComponentMeta, ComponentStory } from "@storybook/react";
import Date from "./Date";

export default {
    title: "Common/Date",
    component: Date,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => <Date {...args} />;
export const Default = Template.bind({});
Default.args = {
    dateString: "2023-05-03T17:50:56.348000",
};
