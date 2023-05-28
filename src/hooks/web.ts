import { Work } from "@/types/common";
import { DebounceExecuteProps } from "@/types/web";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetWorks = (url: string) => {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isContinue, setIsContinue] = useState(true);

    const fetchData = async (url: string, replace: boolean) => {
        setIsLoading(true);
        try {
            const { works: newWorks } = (await axios.get(url)).data;
            if (newWorks.length < 30) {
                setIsContinue(false);
            } else {
                setIsContinue(true);
            }
            if (replace) {
                setWorks(newWorks);
            } else {
                setWorks([...works, ...newWorks]);
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(url, false);
    }, [url]);
    const refetch = (query: string, replace: boolean) => {
        fetchData(`${url}?${query}`, replace);
    };

    return { works, isLoading, isContinue, refetch };
};

export const useDebounceSearch = ({
    keyword,
    timeOutMillSec,
}: DebounceExecuteProps) => {
    const [debouncedKeyword, setDebouncedKeyword] = useState(keyword);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedKeyword(keyword);
        }, timeOutMillSec);
        return () => {
            clearTimeout(timer);
        };
    }, [keyword, timeOutMillSec]);
    return { debouncedKeyword };
};
