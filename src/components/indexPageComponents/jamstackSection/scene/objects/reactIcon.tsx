import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere, Torus } from '@react-three/drei'

export const ReactIcon = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime()) + 7
    mesh.current.rotation.x = state.clock.getElapsedTime()
    mesh.current.rotation.y = state.clock.getElapsedTime()
  })

  return (
    <group position={[0, 4, 0]} ref={mesh} scale={2}>
      <Sphere args={[0.1, 32, 32]} castShadow>
        <meshPhysicalMaterial color='#61dbfb' metalness={0.1} roughness={0.5} />
      </Sphere>
      <Torus args={[0.5, 0.03, 16, 32]} castShadow>
        <meshStandardMaterial color='#61dbfb' metalness={0.1} roughness={0.5} />
      </Torus>
      <Torus
        args={[0.5, 0.03, 16, 32]}
        castShadow
        rotation={[Math.PI / -4, Math.PI / 4, Math.PI / 4]}
      >
        <meshStandardMaterial color='#61dbfb' metalness={0.1} roughness={0.5} />
      </Torus>
      <Torus
        args={[0.5, 0.03, 16, 32]}
        castShadow
        rotation={[Math.PI / -4, Math.PI / -4, Math.PI / -4]}
      >
        <meshStandardMaterial color='#61dbfb' metalness={0.1} roughness={0.5} />
      </Torus>
    </group>
  )
}
