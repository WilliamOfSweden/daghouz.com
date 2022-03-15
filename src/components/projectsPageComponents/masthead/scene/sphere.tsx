import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere as DreiSphere } from '@react-three/drei'

export const Sphere = () => {
  const sphere = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        0,
        0.2
      )
      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6,
        0.2
      )
    }
  })

  return (
    <DreiSphere args={[1, 64, 64]} castShadow ref={sphere} scale={1.5}>
      <MeshDistortMaterial
        clearcoat={0.4}
        clearcoatRoughness={0}
        color='#3162c3'
        envMapIntensity={1}
        metalness={0.8}
      />
    </DreiSphere>
  )
}
