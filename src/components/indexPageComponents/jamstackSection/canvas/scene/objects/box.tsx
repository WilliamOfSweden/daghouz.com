import React from 'react'
import { RoundedBox } from '@react-three/drei'

const Box = () => (
  <RoundedBox
    args={[1, 1, 1]}
    castShadow
    radius={0.1}
    receiveShadow
    position={[0, 0.5, 0]}
  >
    <meshStandardMaterial color='#ffffff' metalness={0.1} roughness={0.5} />
  </RoundedBox>
)

export default Box
