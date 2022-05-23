import React from 'react'
import { ContactShadows } from '@react-three/drei'

import { Lights } from './lights/'
import { Box, JamstackIcon, ReactIcon, TsIcon } from './objects/'

export const Scene = () => (
  <group>
    {/* <ContactShadows
      blur={2.5}
      far={1.6}
      height={15}
      opacity={0.6}
      position={[0, -1.6, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={15}
    /> */}
    <ContactShadows
      blur={3}
      far={50}
      height={1.5}
      opacity={0.7}
      position={[0.1, -1.6, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={1.2}
      color='#1d3a75'
    />
    <Lights />
    {/* <group position={[0, -4, 0]}>
      <JamstackIcon />
      <ReactIcon />
      <group castShadow       position={[1.7, 4.2, 4]}
 rotation={[0, 0, 0]} scale={1.4}>
        <Box />
        <TsIcon />
      </group>
    </group> */}
    <group position={[0, -4, 0]}>
      <JamstackIcon />
      <ReactIcon />
      <group
        castShadow
        position={[0, 2.4, 4]}
        scale={1.4}
        rotation={[0, 0, Math.PI / 48]}
      >
        <Box />
        <TsIcon />
      </group>
    </group>
  </group>
)
