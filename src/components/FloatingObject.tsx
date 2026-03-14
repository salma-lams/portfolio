"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Edges, Float, Torus } from "@react-three/drei";
import * as THREE from "three";

function FloatingWireBox() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.3;
    ref.current.rotation.y = clock.getElapsedTime() * 0.5;
  });
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.8}>
      <Box ref={ref} args={[1.2, 1.2, 1.2]}>
        <meshBasicMaterial color="#facc15" transparent opacity={0.04} />
        <Edges color="#facc15" linewidth={1} threshold={15} />
      </Box>
    </Float>
  );
}

function SpinningTorus() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.4;
    ref.current.rotation.z = clock.getElapsedTime() * 0.2;
  });
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <mesh ref={ref} position={[0.8, -0.4, 0]}>
        <torusGeometry args={[0.65, 0.015, 16, 100]} />
        <meshBasicMaterial color="#facc15" transparent opacity={0.4} />
      </mesh>
    </Float>
  );
}

interface FloatingObjectProps {
  size?: number;
}

export default function FloatingObject({ size = 220 }: FloatingObjectProps) {
  return (
    <div
      className="pointer-events-none absolute right-[5%] top-[10%] hidden xl:block"
      style={{ width: size, height: size }}
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1} color="#facc15" />
        <FloatingWireBox />
        <SpinningTorus />
      </Canvas>
    </div>
  );
}
