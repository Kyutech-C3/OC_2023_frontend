import { TopLoadingProps } from "@/types/common";
import { atom } from "recoil";

export const topLoadingAtom = atom<TopLoadingProps>({
    key: "topLoadingProps",
    default: {
        isLoading: false,
        message: "",
    },
});
