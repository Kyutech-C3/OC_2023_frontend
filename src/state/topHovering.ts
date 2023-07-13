import { TopBackgroundProps } from "@/types/web";
import { atom } from "recoil";

export const topHoveringAtom = atom<{ hovering: TopBackgroundProps }>({
    key: "topHovering",
    default: {
        hovering: "",
    },
});
