import { useLocalStorage } from "@/hooks/common";
import { v4 as uuidv4 } from "uuid";

export const getUserId = () => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    let userId = getLocalStorage("userId");
    if (userId == null) {
        userId = uuidv4();
        setLocalStorage({ userId: userId });
    }
    return userId;
};
