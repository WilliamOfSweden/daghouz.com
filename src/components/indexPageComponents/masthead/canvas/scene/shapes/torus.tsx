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
      args={[1.5, 0.75, 24, 24]}
      castShadow
      position={[7, 0, 0]}
      ref={mesh}
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
