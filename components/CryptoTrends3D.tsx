"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

function CryptoSphere({ position, color, text }: { position: [number, number, number], color: string, text: string }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} metalness={0.4} roughness={0.7} />
      </mesh>
      <Text
        position={[0, -0.7, 0]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  )
}

export default function CryptoTrends3D() {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <CryptoSphere position={[-1.5, 0, 0]} color="#FFA500" text="Bitcoin" />
        <CryptoSphere position={[0, 0, 0]} color="#4CAF50" text="Ethereum" />
        <CryptoSphere position={[1.5, 0, 0]} color="#2196F3" text="Cardano" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

