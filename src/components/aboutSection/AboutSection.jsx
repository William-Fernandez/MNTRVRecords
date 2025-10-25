import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useInView } from "framer-motion";
import Logo3D from "./Logo3D";
import BioText from "./BioText";

export default function AboutSection() {
    const ref = useRef();
    const inView = useInView(ref, { margin: "-20% 0px" });

    return (
        <section
            id="about"
            ref={ref}
            className="p-8 relative w-full min-h-screen flex flex-col md:flex-row bg-gradient-to-b from-black via-black to-gray-900 text-white"
        >
            {/* Columna izquierda: Logo */}
            <div className="w-full md:w-1/2 h-dvh flex items-center justify-center">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 5], fov: 45 }}
                >
                    {/* Luz ambiental suave */}
                    <ambientLight intensity={0.25} color="#ffffff" />

                    {/* Luz principal desde arriba/derecha */}
                    <directionalLight
                        position={[3, 5, 5]}
                        intensity={1.2}
                        color="#ffffff"
                        castShadow
                        shadow-mapSize-width={2048}
                        shadow-mapSize-height={2048}
                        shadow-camera-far={50}
                        shadow-camera-left={-10}
                        shadow-camera-right={10}
                        shadow-camera-top={10}
                        shadow-camera-bottom={-10}
                    />

                    {/* Luz secundaria desde atrás/izquierda */}
                    <directionalLight
                        position={[-3, -2, -5]}
                        intensity={0.4}
                        color="#ffffff"
                    />

                    {/* Luz frontal suave para que el logo de frente sea blanco puro */}
                    <pointLight
                        position={[0, 0, 5]}
                        intensity={0.8}
                        color="#ffffff"
                    />

                    {/* Logo */}
                    <Logo3D inView={inView} refSection={ref} />
                </Canvas>
            </div>

            {/* Columna derecha: Texto bio */}
            <div className="w-full md:w-1/2 h-full flex items-center lg:p-12">
                <BioText />
            </div>
        </section>
    );
}
