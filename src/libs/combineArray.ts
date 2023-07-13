export const combineStrings = (
    arrayA: string | string[] | undefined,
    arrayB: string | string[] | undefined
) => {
    const combined: string[] = [];

    if (typeof arrayA === "string") {
        combined.push(arrayA);
    } else if (Array.isArray(arrayA)) {
        combined.push(...arrayA);
    }

    if (typeof arrayB === "string") {
        combined.push(arrayB);
    } else if (Array.isArray(arrayB)) {
        combined.push(...arrayB);
    }

    return combined;
};
