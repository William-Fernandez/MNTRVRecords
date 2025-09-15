// Logo3D.jsx
import React, { useRef, useMemo } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from "three-stdlib";
import * as THREE from "three";

export default function Logo3D({ inView, refSection }) {
    const groupRef = useRef();
    const svgData = useLoader(SVGLoader, "/mntrv-logo-text.svg");

    // Convertir paths a shapes solo una vez
    const shapes = useMemo(() => {
        const temp = [];
        svgData.paths.forEach((path) => {
            path.toShapes(true).forEach((shape) => temp.push(shape));
        });
        return temp;
    }, [svgData]);

    // Centrar el logo
    const positionOffset = useMemo(() => {
        const group = new THREE.Group();
        shapes.forEach((shape) => {
            const geom = new THREE.ExtrudeGeometry(shape, {
                depth: 0.2,
                bevelEnabled: false,
            });
            const mesh = new THREE.Mesh(geom);
            group.add(mesh);
        });
        const box = new THREE.Box3().setFromObject(group);
        const center = new THREE.Vector3();
        box.getCenter(center);
        return center;
    }, [shapes]);

    useFrame(() => {
        if (groupRef.current && inView && refSection.current) {
            const rect = refSection.current.getBoundingClientRect();
            const progress = 1 - rect.top / window.innerHeight; // 0 → inicio, 1 → final
            groupRef.current.rotation.y = progress * Math.PI * 2;
        }
    });

    return (
        <group ref={groupRef} scale={[0.008, -0.01, 0.008]}>
            {shapes.map((shape, i) => (
                <mesh
                    key={i}
                    position={positionOffset.clone().multiplyScalar(-1)}
                    castShadow
                    receiveShadow
                >
                    <extrudeGeometry
                        args={[shape, { depth: 10, bevelEnabled: false }]}
                    />
                    <meshStandardMaterial
                        color="white"
                        metalness={0}
                        roughness={0.3}
                        emissive="#ffffff"
                        emissiveIntensity={0.25}
                    />
                </mesh>
            ))}
        </group>
    );
}
