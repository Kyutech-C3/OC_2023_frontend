import { ImageIconProps } from "@/types/web";
import Image from "next/image";
import React from "react";

const ImageIcon: React.FC<ImageIconProps> = ({ src }) => {
    return (
        <Image
            src={src}
            alt={src}
            width={20}
            height={20}
            quality={100}
            objectFit="contain"
            objectPosition="center"
        />
    );
};

export default ImageIcon;
