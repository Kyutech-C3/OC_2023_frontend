import { Canvas, MeshProps } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Site } from "@/components/Map/Site/Site";
import { Plane } from "@/components/Map/Plane"
import { Avatar } from "@/components/Map/Avatar/Avatar"
import { Physics, useBox } from "@react-three/cannon";
import { useRef } from "react";
import { Mesh } from "three";
import { Box } from "@mui/material";

function FallBox(props: MeshProps) {
    const [ref, api] = useBox(
        () => ({
            mass: 1,
            position: [30, 100, 0.8],
            args: [1, 1, 1],
            type: `Dynamic`,
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
        <Box component="div" sx={{
            position: 'relative',
            height: "100vh",
            width: "100vw",
            p: 0,
            m: 0,
        }}>
            <Canvas camera={{ position: [0, 2, -1] }} shadows  >
                <ambientLight />
                <OrbitControls />
                <pointLight position={[10, 30, 10]} />
                <Physics
                    broadphase="SAP"
                    gravity={[0, -2.6, 0]}
                >
                    <Plane />
                    <FallBox />
                    {/* <Site /> */}
                    <Avatar />
                </Physics >
            </Canvas >
        </Box >
    );
};

export default Map;
