import { Meta, StoryObj } from "@storybook/react";

import { Comments } from "./Comments";

export default {
    title: "Web/Comments",
    component: Comments,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
    },
} as Meta<typeof Comments>;

export const Default: StoryObj<typeof Comments> = {
    args: {
        comments: [
            {
                comment_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                work_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_name: "hoge",
                comment: "this is a comment",
                created_at: "2023-05-03T17:50:56.348000"
            }, {
                comment_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_id: "8bf9b5c1-1201-4b56-ba42-8f90880b69e4",
                work_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_name: "hoge",
                comment: "this is a comment\nthis is a comment\nthis is a comment\nthis is a comment\nthis is a comment\nthis is a comment\nthis is a comment\nthis is a comment\nthis is a comment\n",
                created_at: "2023-05-03T17:50:56.348000"
            }, {
                comment_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                work_id: "8bf9b5c1-3201-4b56-ba42-8f90880b69e4",
                user_name: "hoge",
                comment: "this is a comment",
                created_at: "2023-05-03T17:50:56.348000"
            },
        ]
    }
};
