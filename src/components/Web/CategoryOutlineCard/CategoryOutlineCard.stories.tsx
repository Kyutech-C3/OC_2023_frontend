import { Meta, StoryObj } from "@storybook/react";

import { CategoryOutlineCard } from "./CategoryOutlineCard";

export default {
    title: "Web/CategoryOutlineCard",
    component: CategoryOutlineCard,
    tags: ["autodocs"],
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {},
} as Meta<typeof CategoryOutlineCard>;

export const Default: StoryObj<typeof CategoryOutlineCard> = {
    args: {
        category: "hack",
        redirectPath: "https://google.com",
        backgroundImagePath:
            "https://img.freepik.com/free-photo/cute-kitten-staring-out-the-window-playful-curiosity-generative-ai_188544-12520.jpg",
        caption:
            "「プログラミングサークル」は、情熱を持ったプログラマーやコーディングに興味のある人々が集まる場です。我々のサークルは、学習やスキル向上のためのワークショップやプロジェクトを提供しています。初心者から上級者まで、みんなが刺激を受け、アイデアを共有できるフレンドリーな環境を大切にしています。また、楽しみながら学ぶことも重視しており、定期的なイベントやハッカソンも開催しています。一緒にコーディングの世界を楽しみ、成長しましょう！興味がある方はぜひ参加してみてください。",
    },
};
