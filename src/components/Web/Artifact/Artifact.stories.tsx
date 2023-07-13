import { Meta, StoryObj } from "@storybook/react";

import { Artifact } from "./Artifact";

export default {
    title: "Web/Artifact",
    component: Artifact,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Artifact>;

export const Template: StoryObj<typeof Artifact> = {
    args: {
        id: "b949c1c7-9132-4315-8d3e-476e5066c3de",
        title: "日清のやつ",
        user: {
            id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
            name: "土佐犬",
            display_name: "土佐犬",
            avatar_url:
                "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
            created_at: "2023-05-03T17:44:49.962784",
            updated_at: "2023-05-03T17:44:49.962784",
        },
        tags: [
            {
                name: "Hack",
                color: "#ffffff",
                id: "5561ba4f-4410-4755-8849-aa8e297a9f44",
            },
            {
                name: "threejs",
                color: "#ffffff",
                id: "094459d0-e6a6-4bd0-b6d0-6b22bebfd852",
            },
        ],
        thumbnail: {
            id: "64bdb5d5-8067-471e-916c-e8ab58394ba2",
            extension: "png",
            created_at: "2023-05-03T17:47:56.186760",
            asset_type: "image",
            user: {
                id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
                name: "土佐犬",
                display_name: "土佐犬",
                avatar_url:
                    "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
                created_at: "2023-05-03T17:44:49.962784",
                updated_at: "2023-05-03T17:44:49.962784",
            },
            url: "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/image/64bdb5d5-8067-471e-916c-e8ab58394ba2/origin.png",
            updated_at: "2023-05-03T17:47:56.195082",
        },
        created_at: "2023-05-03T17:50:56.348000",
    },
};
