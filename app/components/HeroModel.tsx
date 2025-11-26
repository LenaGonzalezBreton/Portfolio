"use client";

import { Canvas } from "@react-three/fiber";
import {OrbitControls, useGLTF, Center, Environment} from "@react-three/drei";
import { Suspense } from "react";

function Model() {
    const gltf = useGLTF("/models/hero-model/model.gltf");

    return (
        <Center>
            <primitive
                object={gltf.scene}
                scale={0.018}
                position={[0, -0.5, 0]}
                rotation={[-Math.PI / 10, Math.PI, 0]}
            />
        </Center>
    );
}

useGLTF.preload("/models/hero-model/model.gltf");

export default function HeroModel() {
    return (
        <Canvas
            shadows="basic"
            camera={{ position: [2.5, 1.8, 3.2], fov: 45 }}
            dpr={[1, 1.5]}
            style={{ background: "transparent" }}
        >
            <ambientLight intensity={0.4} />
            <directionalLight position={[4, 5, 2]} intensity={0.8} castShadow/>

            <Suspense fallback={null}>
                <Model />
                < Environment preset="forest" />
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1.2}
            />
        </Canvas>
    );
}
