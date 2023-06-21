import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Favorite } from "./Favorite";

export default {
    title: "Web/Favorite",
    component: Favorite,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof Favorite>;

const Template: ComponentStory<typeof Favorite> = (args) => (
    <Favorite {...args} />
);
export const Default = Template.bind({});
Default.args = {
    workId: "",
    favoriteUsersProps: [""],
};
