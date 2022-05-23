import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Torus as DreiTorus } from '@react-three/drei'

export const Torus = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.rotation.y = state.clock.getElapsedTime() / 2
    mesh.current.rotation.x = state.clock.getElapsedTime() / 3
  })

  return (
    <DreiTorus
      args={[1.25, 0.625, 24, 24]}
      castShadow
      position={[1.7, 4.2, 4]}
      ref={mesh}
      scale={0.8}
    >
      <meshStandardMaterial
        color='#ffffff'
        metalness={0}
        roughness={0.5}
        wireframe
      />
    </DreiTorus>
  )
}
