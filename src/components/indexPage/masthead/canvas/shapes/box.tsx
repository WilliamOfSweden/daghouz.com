import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

const Box = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime()) + 7.5
    mesh.current.rotation.z = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime())
  })

  return (
    <RoundedBox
      args={[2, 2, 2]}
      castShadow
      position={[5, 0, -8]}
      radius={0.3}
      ref={mesh}
    >
      <meshStandardMaterial color='#ffffff' metalness={0.1} roughness={0.5} />
    </RoundedBox>
  )
}

export default Box
