import React from 'react'
import { softShadows } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

import * as canvasStyles from './canvas.module.css'
import Scene from './scene/'

softShadows()

const Canvas = () => (
  <div className={canvasStyles.outerCanvasWrapper}>
    <ThreeCanvas
      camera={{ position: [0, 1, 10], fov: 60 }}
      className={canvasStyles.innerCanvasWrapper}
      gl={{ alpha: true, antialias: true, precision: 'highp' }}
      shadows
    >
      <Scene />
    </ThreeCanvas>
  </div>
)

export default Canvas
