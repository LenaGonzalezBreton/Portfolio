"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

function Model() {
    return (
        <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 32]} />
            <meshStandardMaterial color="#B388EB" metalness={0.3} roughness={0.2} />
        </mesh>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [3, 2, 4], fov: 45 }}
                dpr={[1, 1.5]} // limite le dpr pour perf
            >
                {/* on évite le flash blanc */}
                <color attach="background" args={["transparent"]} />
                <ambientLight intensity={0.6} />
                <directionalLight position={[3, 3, 3]} intensity={1} />

                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="studio" />
                </Suspense>

                {/* contrôles limités */}
                <OrbitControls enablePan={false} enableZoom={false} />
            </Canvas>
        </div>
    );
}
