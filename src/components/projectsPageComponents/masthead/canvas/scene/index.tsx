import React, { Fragment } from 'react'
import {
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from '@react-three/drei'

import Sphere from './sphere'

const Scene = () => (
  <Fragment>
    <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
      <ambientLight intensity={1.5} />
    </PerspectiveCamera>
    <Sphere />
    <Environment preset='lobby' />
    <ContactShadows
      blur={2.5}
      far={1.6}
      height={15}
      opacity={0.6}
      position={[0, -1.6, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      width={15}
    />
  </Fragment>
)

export default Scene
