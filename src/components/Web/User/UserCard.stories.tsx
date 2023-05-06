import { ComponentMeta, ComponentStory } from "@storybook/react";

import { UserCard } from "./UserCard";

export default {
    title: "Web/User",
    component: UserCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => (
    <UserCard {...args} />
);
export const Default = Template.bind({});
Default.args = {
    size: "small",
    display_name: "土佐犬",
    avatar_url:
        "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
};
