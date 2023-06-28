import { useRef } from "react";
import { useBox } from "@react-three/cannon";

export const Plane = (props: any) => {
    const ref = useRef();
    const [_, api] = useBox(() => ({
        type: 'Static',
        position: [0, -1, 0],
        args: [10000, 0, 10000],
        friction: 0
    }));

    return (
        <mesh ref={ref} {...props}>
            <boxBufferGeometry args={[1000, -1, 1000]} />
            <meshStandardMaterial color="lightblue" />
        </mesh>
    );
}

export default Plane;