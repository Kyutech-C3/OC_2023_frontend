import React from "react";

export const Socket = () => {
    const [uid, setUid] = React.useState<string>();
    const socketRef = React.useRef<WebSocket>();

    type init = {
      
    }

    React.useEffect(() => {
        const websocket = new WebSocket(
            `wss://oc2023-ws.compositecomputer.club/ws`
        );
        socketRef.current = websocket;

        const onInit = (e: MessageEvent<string>) => {
            setUid(e.data);
        };
        websocket.addEventListener(`message`, onInit);

        return () => {
            websocket.close();
            websocket.removeEventListener("message", onInit);
        };
    }, []);

    return <div>{uid}</div>;
};
