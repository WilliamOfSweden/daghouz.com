import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cylinder, Box } from '@react-three/drei'
import { DoubleSide } from 'three'

const JamstackIcon = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.4) + 2
  })

  return (
    <group
      position={[-1.5, 0, 3]}
      ref={mesh}
      rotation={[Math.PI / 2, 0, Math.PI / -4]}
      scale={0.26}
    >
      <Cylinder args={[2, 2, 0.4, 64]} castShadow position={[-3.5, 0, 0]}>
        <meshStandardMaterial color='#f0047f' metalness={0.1} roughness={0.5} />
      </Cylinder>
      <Box args={[2, 0.4, 2]} position={[-2.5, 0, -1]}>
        <meshStandardMaterial color='#f0047f' metalness={0.1} roughness={0.5} />
      </Box>
      <Box args={[1.5, 0.45, 1.5]} position={[-2.6, 0, -0.9]}>
        <meshStandardMaterial color='#ffffff' metalness={0.1} roughness={0.5} />
      </Box>
      <Cylinder
        args={[1.5, 1.5, 0.45, 64, 1, false, 0, Math.PI / 2]}
        castShadow
        position={[-3.35, 0, 0.15]}
      >
        <meshStandardMaterial
          color='#ffffff'
          metalness={0.1}
          roughness={0.5}
          side={DoubleSide}
        />
      </Cylinder>
      <Cylinder
        args={[1.5, 1.5, 0.45, 64, 1, false, Math.PI / -2, Math.PI / 2]}
        castShadow
        position={[-3.65, 0, 0.15]}
      >
        <meshStandardMaterial
          color='#ffffff'
          metalness={0.1}
          roughness={0.5}
          side={DoubleSide}
        />
      </Cylinder>
    </group>
  )
}

export default JamstackIcon
