import { Canvas, MeshProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Site } from "../../components/Map/Site/Site";
import { Plane } from "../../components/Map/Plane"
import styles from "../../styles/map.module.css";
import { Physics, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";

function Box(props: MeshProps) {
    const [ref, api] = useBox(
        () => ({
            mass: 1,
            position: [30, 10, 0.8],
            args: [1, 1, 1],
        }),
        useRef<Mesh>(null),
    );
    return (
        <mesh ref={ref} onClick={() => api.velocity.set(0, 5, 0)} {...props}>
            <boxBufferGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>
    );
}

const Map = () => {
    return (
        <div className={styles.map}>
            <Canvas camera={{ position: [0, 2, -1] }} shadows style={{ height: "100%" }} className={styles.canvas}>
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                >
                    <directionalLight position={[0, 10, 0]} castShadow />
                    <Plane />
                    <Box />
                    <Site />
                    <OrbitControls target={[0, 0, 0]} />
                </Physics>
            </Canvas>
        </div>
    );
};

export default Map;
