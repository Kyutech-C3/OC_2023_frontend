import { TopLoadingProps } from "@/types/common";
import { atom } from "recoil";

export const topLoadingAtom = atom<TopLoadingProps>({
    key: "topLoading",
    default: {
        isLoading: false,
        message: "",
    },
});
