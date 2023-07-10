import { Asset } from "@/types/common";
import Image from "next/legacy/image";

export const ImageViewer = ({ url }: Asset) => {
    return (
        <Image
            quality={100}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={url}
            src={url}
        />
    );
};
