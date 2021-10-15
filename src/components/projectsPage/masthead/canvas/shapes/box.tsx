import React, { useRef } from 'react'

import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

const BoxComponent = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime()) + 7.5
    mesh.current.rotation.z = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(state.clock.getElapsedTime())
  })

  return (
    <RoundedBox
      castShadow
      ref={mesh}
      radius={0.3}
      args={[2, 2, 2]}
      position={[5, 0, -8]}
    >
      <meshStandardMaterial
        color='darkorange'
        roughness={0.5}
        metalness={0.1}
      />
    </RoundedBox>
  )
}

export default BoxComponent
