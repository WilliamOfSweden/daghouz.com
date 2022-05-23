import React, { Fragment } from 'react'
import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from '@react-three/drei'

import { Sphere } from './sphere'

export const Scene = () => (
  <Fragment>
    <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
      <ambientLight intensity={1.5} />
    </PerspectiveCamera>
    <Sphere />
    <Environment preset='lobby' />
    <ContactShadows
      blur={3}
      far={50}
      height={0.6}
      opacity={0.3}
      position={[0, -1.7, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={0.6}
      color='#1d3a75'
    />
  </Fragment>
)
