import { ContactShadows } from '@react-three/drei'
import React from 'react'

import Lights from './lights/'
import { Box, Plane, Sphere, Torus } from './shapes/'

const Scene = () => (
  <group>
    <ContactShadows
      blur={2.5}
      far={1.6}
      height={15}
      opacity={0.6}
      position={[0, -1.6, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={15}
    />
    <Lights />
    <Plane />
    <group position={[0, -4, 0]}>
      <Plane />
      <Sphere />
      <Box />
      <Torus />
    </group>
  </group>
)

export default Scene
