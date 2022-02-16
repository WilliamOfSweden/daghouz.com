import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere as DreiSphere } from '@react-three/drei'

const Sphere = () => {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.8) + 3
  })

  return (
    <DreiSphere castShadow ref={mesh} position={[-3.5, 0, 0]}>
      <meshStandardMaterial color='#3162c3' metalness={0.1} roughness={0.5} />
    </DreiSphere>
  )
}

export default Sphere
