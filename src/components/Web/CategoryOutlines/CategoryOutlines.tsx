import { outlines } from "@/components/constants/outlines";
import { CategoryOutlineCard } from "../CategoryOutlineCard/CategoryOutlineCard";

export const CategoryOutlines = () => {
    return (
        <>
            {outlines.map((outline) => (
                <CategoryOutlineCard key={outline.category} {...outline} />
            ))}
        </>
    );
};
