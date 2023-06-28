import { useMemo } from "react";
import { useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Geometry } from "three-stdlib";


function toConvexProps(bufferGeometry) {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  return [geo.vertices.map((v) => [v.x, v.y, v.z]), geo.faces.map((f) => [f.a, f.b, f.c]), []]; // prettier-ignore
}

export const Site = () => {
  const loadpath = "/models/site_physics.glb";
  const { nodes } = useGLTF(loadpath);
  const geo = useMemo(() => toConvexProps(nodes.root.geometry), [nodes]);
  const [ref] = useConvexPolyhedron(() => ({ mass: 100,type: "static" , args: geo }));
  return (
    <mesh castShadow receiveShadow ref={ref} geometry={nodes.root.geometry} material={nodes.root.material}>
    </mesh>
  )
}

useGLTF.preload('/models/site_physics_joined.glb')