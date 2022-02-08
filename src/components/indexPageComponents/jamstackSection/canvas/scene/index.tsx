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
      <group position={[1, 0, 5]} rotation={[0, Math.PI / 6, 0]} scale={0.9}>
        <Box />
        <TsIcon />
      </group>
    </group>
  </group>
)

export default Scene
