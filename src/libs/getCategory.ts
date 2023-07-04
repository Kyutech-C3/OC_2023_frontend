import { GetTag } from "@/types/common";
import { ButtonTypeMap } from "@mui/material";

export const getCategory = (
    tags: GetTag[]
): Extract<
    ButtonTypeMap["props"]["color"],
    "hack" | "game" | "cg2d" | "cg3d" | "music" | "primary"
> => {
    for (const tag of tags) {
        if (tag.name.toLowerCase() == "hack") {
            return "hack";
        } else if (tag.name.toLowerCase() == "game") {
            return "game";
        } else if (tag.name.toLowerCase() == "2dcg") {
            return "cg2d";
        } else if (tag.name.toLowerCase() == "3dcg") {
            return "cg3d";
        } else if (tag.name.toLowerCase() == "music") {
            return "music";
        }
    }
    return "primary";
};

export const castCategory = (raw: string) => {
    if (raw == "hack" || raw == "Hack") {
        return "hack";
    } else if (raw == "game") {
        return "game";
    } else if (raw == "2dcg") {
        return "cg2d";
    } else if (raw == "3dcg") {
        return "cg3d";
    } else if (raw == "music") {
        return "music";
    }
    return "primary";
};
