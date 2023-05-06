import { GetTag } from "@/types/common";
import { ButtonTypeMap } from "@mui/material";

export const getCategory = (
    tags: GetTag[]
): Extract<
    ButtonTypeMap["props"]["color"],
    "hack" | "game" | "cg2d" | "cg3d" | "music" | "primary"
> => {
    for (let tag of tags) {
        if (tag.name == "hack" || tag.name == "Hack") {
            return "hack";
        } else if (tag.name == "game") {
            return "game";
        } else if (tag.name == "cg2d") {
            return "cg2d";
        } else if (tag.name == "cg3d") {
            return "cg3d";
        } else if (tag.name == "music") {
            return "music";
        }
    }
    return "primary";
};
