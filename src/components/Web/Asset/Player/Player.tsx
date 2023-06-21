import { Asset } from "@/types/common";
import ReactPlayer from "react-player";

export const Player = ({ url }: Asset) => {
    return (
        <ReactPlayer
            style={{
                userSelect: "none",
            }}
            controls={true}
            url={url}
        />
    );
};
