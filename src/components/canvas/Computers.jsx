import React from "react";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Preload,
  useGLTF,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

/* const CameraHelper = () => {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}; */

const Computers = () => {
  const computer = useGLTF("./macbook/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight position={[-3, 0, 0]} intensity={70} />
      <spotLight position={[0, 3, 0]} angle={10} penumbra={1} intensity={70} />
      <primitive
        object={computer.scene}
        scale={16}
        position={[0, -4, 1.5]}
        rotation={[-0.015, 2.95, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 4, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.2}
          //maxPolarAngle={0}
          //minPolarAngle={0}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
