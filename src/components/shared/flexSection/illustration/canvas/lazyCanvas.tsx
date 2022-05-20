import React, { ReactNode } from 'react'
import { softShadows } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

import * as canvasStyles from './canvas.module.css'

softShadows()

interface Props {
  children?: ReactNode
}

const LazyCanvas = ({ children }: Props) => (
  <ThreeCanvas
    camera={{ fov: 60, position: [-5, 1, 10] }}
    className={canvasStyles.canvasWrapper}
    gl={{ alpha: true, antialias: true, precision: 'highp' }}
    shadows
  >
    {children}
  </ThreeCanvas>
)

export default LazyCanvas
