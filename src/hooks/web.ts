import { Work } from "@/types/common";
import axios from "axios";
import { useEffect, useState } from "react";

export const useGetWorks = (url: string) => {
    const [works, setWorks] = useState<Work[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isContinue, setIsContinue] = useState(true);

    const fetchData = async (url: string) => {
        setIsLoading(true);
        try {
            console.log(url);
            const { works: newWorks } = (await axios.get(url)).data;
            if (newWorks.length < 30) {
                setIsContinue(false);
            }
            setWorks([...works, ...newWorks]);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const refetch = (query: string) => {
        fetchData(`${url}?${query}`);
    };

    return { works, isLoading, isContinue, refetch };
};
