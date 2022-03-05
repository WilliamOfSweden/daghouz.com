import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere as DreiSphere } from '@react-three/drei'

export const Sphere = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y =
      Math.sin(state.clock.getElapsedTime() * 0.8) / 4 + 3.5
  })

  return (
    <DreiSphere
      args={[1, 32, 32]}
      castShadow
      ref={mesh}
      position={[-4, 0, 4]}
      scale={0.6}
    >
      <meshStandardMaterial color='#3162c3' metalness={0.1} roughness={0.5} />
    </DreiSphere>
  )
}
