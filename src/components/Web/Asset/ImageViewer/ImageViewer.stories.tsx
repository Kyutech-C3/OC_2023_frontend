import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImageViewer } from "./ImageViewer";

export default {
    title: "Web/Asset/ImageViewer",
    component: ImageViewer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof ImageViewer>;

const Template: ComponentStory<typeof ImageViewer> = (args) => (
    <ImageViewer {...args} />
);
export const Default = Template.bind({});
Default.args = {
    url: "",
};
