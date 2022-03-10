import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

export const Box = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime()) + 10
    mesh.current.rotation.z = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime())
  })

  return (
    <RoundedBox
      args={[3, 3, 3]}
      castShadow
      position={[4, 4, -10]}
      radius={0.3}
      ref={mesh}
    >
      <meshStandardMaterial color='#7c7cf8' metalness={0.1} roughness={0.5} />
    </RoundedBox>
  )
}
