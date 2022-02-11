import React from 'react'
import Lights from './lights/'
import { Box, JamstackIcon, Plane, ReactIcon, Rocket, TsIcon } from './objects/'

const Scene = () => (
  <group>
    <Lights />
    <Plane />
    <group position={[0.3, 0, 0]}>
      <Rocket />
      <JamstackIcon />
      <ReactIcon />
      <group position={[-0.1, 0, 7]} rotation={[0, Math.PI / 6, 0]} scale={0.6}>
        <Box />
        <TsIcon />
      </group>
    </group>
  </group>
)

export default Scene
