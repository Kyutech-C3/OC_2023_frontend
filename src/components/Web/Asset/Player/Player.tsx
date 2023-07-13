import { Asset } from "@/types/common";
import ReactPlayer from "react-player";

export const Player = ({ url }: Asset) => {
    return (
        <ReactPlayer
            style={{
                userSelect: "none",
            }}
            width={"60vw"}
            controls={true}
            url={url}
        />
    );
};
