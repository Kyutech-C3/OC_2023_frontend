import React, { useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect } from "react";
import { ReactUnityEventParameter } from "react-unity-webgl/distribution/types/react-unity-event-parameters";

export const UnityData = () => {
    const {
        unityProvider,
        addEventListener,
        removeEventListener,
        sendMessage,
    } = useUnityContext({
        loaderUrl: "Build/OpenCampus.loader.js",
        dataUrl: "Build/OpenCampus.data",
        frameworkUrl: "Build/OpenCampus.framework.js",
        codeUrl: "Build/OpenCampus.wasm",
    });

    const handleDataCallBack = useCallback<
        (...parameters: ReactUnityEventParameter[]) => ReactUnityEventParameter
    >((...parameters) => {
        const [uuid, PosX, PosY, PosZ, RotX, RotY, RotZ, AnimName, AnimTime] =
            parameters as [
                string,
                number,
                number,
                number,
                number,
                number,
                number,
                string,
                number
            ];
        return undefined;
    }, []);

    const handleOpenModal = useCallback<
        (...parameters: ReactUnityEventParameter[]) => ReactUnityEventParameter
    >((...parameters) => {
        const [Genre] = parameters as [string];
        console.log("Open" + Genre);
        return undefined;
    }, []);
    const handleCloseModal = useCallback<
        (...parameters: ReactUnityEventParameter[]) => ReactUnityEventParameter
    >((...parameters) => {
        const [Genre] = parameters as [string];
        console.log("close" + Genre);
        return undefined;
    }, []);

    useEffect(() => {
        addEventListener("DataCallBack", handleDataCallBack);
        addEventListener("ModalCall", handleOpenModal);
        addEventListener("ModalClose", handleCloseModal);
        return () => {
            removeEventListener("DataCallBack", handleDataCallBack);
            removeEventListener("ModalCall", handleOpenModal);
            removeEventListener("ModalClose", handleCloseModal);
        };
    }, [addEventListener, removeEventListener, handleDataCallBack]);

    return (
        <div>
            <Unity
                unityProvider={unityProvider}
                style={{
                    height: "100vh",
                    width: "100vw",
                    background: "grey",
                }}
            />
        </div>
    );
};

export default UnityData;
