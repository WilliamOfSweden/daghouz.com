import React, { ComponentProps } from 'react'

import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { SoftShadows } from '@react-three/drei'

import * as styles from './canvas.module.css'

const Canvas = ({
  children,
  ...restProps
}: ComponentProps<typeof ThreeCanvas>) => (
  <ThreeCanvas
    aria-hidden='true'
    camera={{ fov: 60, position: [-5, 1, 10] }}
    className={styles.canvasWrapper}
    gl={{ alpha: true, antialias: true, precision: 'highp' }}
    shadows
    {...restProps}
  >
    <SoftShadows />
    {children}
  </ThreeCanvas>
)

export default Canvas
