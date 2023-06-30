import { useMemo, useRef } from "react";
import { ConvexPolyhedronArgs, useConvexPolyhedron } from "@react-three/cannon";
import { useGLTF } from "@react-three/drei";
import { Geometry } from "three-stdlib";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    root: THREE.Mesh
  }
}


function toConvexProps(bufferGeometry: THREE.BufferGeometry<THREE.NormalBufferAttributes>): ConvexPolyhedronArgs<THREE.Vector3> {
  const geo = new Geometry().fromBufferGeometry(bufferGeometry);
  geo.mergeVertices();
  return [
    geo.vertices.map((v) => new THREE.Vector3(v.x, v.y, v.z)),
    geo.faces.map((f) => [f.a, f.b, f.c]),
    []
  ];
}


export const Site = () => {
  const loadpath = "/models/site_physics.glb";
  const { nodes } = useGLTF(loadpath) as GLTFResult;
  const geo: ConvexPolyhedronArgs<THREE.Vector3> = useMemo(() => toConvexProps(nodes.root.geometry), [nodes]);
  const [ref] = useConvexPolyhedron(
    () => ({
      mass: 100,
      Type: "static",
      args: geo
    }),
    useRef<THREE.Mesh>(null),
  );
  return (
    <mesh castShadow receiveShadow ref={ref} geometry={nodes.root.geometry} material={nodes.root.material}>
    </mesh>
  )
}

useGLTF.preload('/models/site_physics_joined.glb')