import { topLoadingAtom } from "@/components/state/topLoading";
import { TopLoadingProps } from "@/types/common";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useTopLoading = ({ isLoading, message }: TopLoadingProps) => {
    const setTopLoadingState = useSetRecoilState(topLoadingAtom);

    useEffect(() => {
        if (isLoading) {
            setTopLoadingState({
                isLoading: true,
                message: message,
            });
        } else {
            setTopLoadingState({
                isLoading: false,
                message: "",
            });
        }
    }, [isLoading]);
};
