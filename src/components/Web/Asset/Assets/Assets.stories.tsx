import { Meta, StoryObj } from "@storybook/react";

import { Assets } from "./Assets";

export default {
    title: "Web/Asset/Assets",
    component: Assets,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof Assets>;

export const Template: StoryObj<typeof Assets> = {
    args: {
        assets: [
            {
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
            },
            {
                asset_type: "image",
                created_at: "2023-05-13T21:46:47.589205",
                extension: "png",
                id: "6661ca35-2009-4b6e-b8ba-b924a3de2a0b",
                updated_at: "2023-05-13T22:03:25.935932",
                url: "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/image/6661ca35-2009-4b6e-b8ba-b924a3de2a0b/origin.png",
                user: {
                    id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
                    name: "土佐犬",
                    display_name: "土佐犬",
                    avatar_url:
                        "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
                    created_at: "2023-05-03T17:44:49.962784",
                    updated_at: "2023-05-03T17:44:49.962784",
                },
            },
            {
                asset_type: "zip",
                created_at: "2023-05-13T21:46:47.589205",
                extension: "zip",
                id: "ae580057-5fd3-423a-9052-7c7bc80456e0",
                updated_at: "2023-05-13T22:03:25.935932",
                url: "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/zip/ae580057-5fd3-423a-9052-7c7bc80456e0/origin.zip",
                user: {
                    id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
                    name: "土佐犬",
                    display_name: "土佐犬",
                    avatar_url:
                        "https://cdn.discordapp.com/avatars/506014633665101825/45768a9214cc66dc474eb884cf31be68.png",
                    created_at: "2023-05-03T17:44:49.962784",
                    updated_at: "2023-05-03T17:44:49.962784",
                },
            },
            {
                asset_type: "video",
                created_at: "2023-05-13T21:46:47.589205",
                extension: "mp4",
                id: "d70b0ab4-6606-4212-a3cc-958cf619c1c1",
                updated_at: "2023-05-13T22:03:25.935932",
                url: "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/video/d70b0ab4-6606-4212-a3cc-958cf619c1c1/origin.mp4",
                user: {
                    id: "e41601a1-9efe-4b7e-a946-55f7a1df6ef7",
                    name: "土佐犬",
                    display_name: "土佐犬",
                    avatar_url:
                        "https://s3.ap-northeast-2.wasabisys.com/toybox/assets/video/d70b0ab4-6606-4212-a3cc-958cf619c1c1/origin.mp4",
                    created_at: "2023-05-03T17:44:49.962784",
                    updated_at: "2023-05-03T17:44:49.962784",
                },
            },
        ],
    },
};
