import { topLoadingAtom } from "@/state/topLoading";
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

export const useLocalStorage = () => {
    const getLocalStorage = (key: string) => {
        if (typeof window !== "undefined") {
            const value = localStorage.getItem(key);
            return value;
        }
        return null;
    };
    const setLocalStorage = (setValue: object) => {
        Object.entries(setValue).map(([key, value]) => {
            localStorage.setItem(key, value);
        });
    };
    const clearLocalStorage = () => {
        localStorage.clear();
    };
    const removeLocalStorage = (key: string) => {
        localStorage.removeItem(key);
    };
    return {
        getLocalStorage,
        setLocalStorage,
        clearLocalStorage,
        removeLocalStorage,
    };
};
