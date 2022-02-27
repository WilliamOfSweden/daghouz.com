import React from 'react'

import Lights from './lights/'
import { Box, Plane, Sphere, Torus } from './shapes/'

const Scene = () => (
  <group>
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
