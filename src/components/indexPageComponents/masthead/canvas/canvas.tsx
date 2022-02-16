import React from 'react'
import { softShadows } from '@react-three/drei'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

import * as canvasStyles from './canvas.module.css'
import { Box, Plane, Sphere, Torus } from './shapes/'

softShadows()

const Canvas = () => (
  <div className={canvasStyles.outerCanvasWrapper}>
    <ThreeCanvas
      className={canvasStyles.innerCanvasWrapper}
      shadows
      gl={{ alpha: true, antialias: true, precision: 'highp' }}
      camera={{ fov: 60, position: [-5, 2, 10] }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight
        castShadow
        intensity={1.5}
        position={[2.5, 8, 5]}
        shadow-camera-bottom={-10}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
      />
      <pointLight color='#3162c3' intensity={2.5} position={[-10, 0, -20]} />
      <pointLight intensity={1.5} position={[0, -10, 0]} />
      <group position={[0, -4, 0]}>
        <Plane />
        <Sphere />
        <Box />
        <Torus />
      </group>
    </ThreeCanvas>
  </div>
)

export default Canvas
