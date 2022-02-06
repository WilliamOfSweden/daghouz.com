import React from 'react'
import { RoundedBox } from '@react-three/drei'

const Box = () => (
  <RoundedBox
    args={[2.5, 2.5, 2.5]}
    castShadow
    radius={0.3}
    receiveShadow
    position={[0, -1, 5]}
  >
    <meshStandardMaterial color='#ffffff' metalness={0.1} roughness={0.5} />
  </RoundedBox>
)

export default Box
