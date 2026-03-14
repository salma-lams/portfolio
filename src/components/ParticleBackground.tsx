"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

/* ── Animated particle cloud ──────────────────────────────────────── */
function ParticleCloud({ count = 3000 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  // Generate random positions on the surface of a sphere
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 + Math.random() * 1.5; // radius 1.5–3
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05;
    ref.current.rotation.x = Math.sin(t * 0.03) * 0.2;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#facc15"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  );
}

/* ── Slowly orbiting ring ──────────────────────────────────────────── */
function OrbitRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.x = clock.getElapsedTime() * 0.08;
    ref.current.rotation.z = clock.getElapsedTime() * 0.04;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.6, 0.003, 16, 200]} />
      <meshBasicMaterial color="#facc15" transparent opacity={0.15} />
    </mesh>
  );
}

/* ── Second ring at different tilt ───────────────────────────────── */
function OrbitRing2() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * 0.06;
    ref.current.rotation.x = 1.2;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.2, 0.002, 16, 200]} />
      <meshBasicMaterial color="#facc15" transparent opacity={0.1} />
    </mesh>
  );
}

/* ── Public component ─────────────────────────────────────────────── */
export default function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        <ParticleCloud count={2500} />
        <OrbitRing />
        <OrbitRing2 />
      </Canvas>
    </div>
  );
}
