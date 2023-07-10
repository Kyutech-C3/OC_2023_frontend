import { Asset } from "@/types/common";
import { OrbitControls, useFBX, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
const FbxModel = ({ url }: Pick<Asset, "url">) => {
    const fbx = useFBX(url);
    fbx.traverse((child: THREE.Object3D) => {
        if (child.type === "PointLight") {
            const pointLight = child as THREE.PointLight;
            pointLight.intensity = 0;
        }
    });
    return <primitive object={fbx} />;
};
const GltfModel = ({ url }: Pick<Asset, "url">) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
};

const Model = ({ extension, url }: Asset) => {
    if (extension == "fbx") {
        return <FbxModel url={url} />;
    } else if (extension == "gltf") {
        return <GltfModel url={url} />;
    }
    return <></>;
};
export const ModelViewer = (props: Asset) => {
    return (
        <Canvas
            style={{ width: "100%", height: "400px" }}
            camera={{ fov: 75, position: [-10, 10, 10] }}
        >
            <ambientLight intensity={1} />
            <spotLight intensity={100} position={[10, 10, 10]} />
            <OrbitControls autoRotate={true} autoRotateSpeed={1} />
            <Model {...props} />
        </Canvas>
    );
};
