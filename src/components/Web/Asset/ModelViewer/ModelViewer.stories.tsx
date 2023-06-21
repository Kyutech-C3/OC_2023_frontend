import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ModelViewer } from "./ModelViewer";

export default {
    title: "Web/Asset/ModelViewer",
    component: ModelViewer,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as ComponentMeta<typeof ModelViewer>;

const Template: ComponentStory<typeof ModelViewer> = (args) => (
    <ModelViewer {...args} />
);
export const Default = Template.bind({});
Default.args = {
    asset_type: "model",
    created_at: "2023-05-13T21:41:03.099676",
    extension: "gltf",
    id: "622e943b-abbf-42a9-8486-ef1ee31a31bc",
    updated_at: "2023-05-13T22:03:25.935932",
    url: "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/model/622e943b-abbf-42a9-8486-ef1ee31a31bc/origin.gltf",
    user: {
        id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
        name: "土佐犬",
        display_name: "土佐犬",
        avatar_url:
            "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
        created_at: "2023-05-03T17:44:49.962784",
        updated_at: "2023-05-03T17:44:49.962784",
    },
};
