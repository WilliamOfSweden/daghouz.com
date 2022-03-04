import React, { ReactNode } from 'react'
import { softShadows } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

import * as canvasStyles from './canvas.module.css'

softShadows()

interface Props {
  children: ReactNode
}

const Canvas = ({ children }: Props) => (
  <div className={canvasStyles.outerCanvasWrapper}>
    <ThreeCanvas
      camera={{ fov: 60, position: [-5, 2, 10] }}
      className={canvasStyles.innerCanvasWrapper}
      gl={{ alpha: true, antialias: true, precision: 'highp' }}
      shadows
    >
      {children}
    </ThreeCanvas>
  </div>
)

export default Canvas
