import React from 'react'
import { ContactShadows } from '@react-three/drei'

import Lights from './lights/'
import { Box, JamstackIcon, Plane, ReactIcon, TsIcon } from './objects/'

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
      <JamstackIcon />
      <ReactIcon />
      <group castShadow position={[0, 2.4, 4]} rotation={[0, 0, 0]} scale={1.4}>
        <Box />
        <TsIcon />
      </group>
    </group>
  </group>
)

export default Scene
