import React from 'react'
import { ContactShadows } from '@react-three/drei'

import { Lights } from './lights/'
import { Box, Sphere, Torus } from './shapes/'

export const Scene = () => (
  <group>
    <group position={[0, -4, 0]}>
      <Sphere />
      <Box />
      <Torus />
    </group>
    <ContactShadows
      blur={3}
      far={50}
      height={1.5}
      opacity={0.3}
      position={[0.1, -1.6, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={1.2}
      color='#1d3a75'
    />
    <Lights />
  </group>
)
