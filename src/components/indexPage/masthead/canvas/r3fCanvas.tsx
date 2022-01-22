import React from 'react'
import { Canvas } from '@react-three/fiber'
import { softShadows } from '@react-three/drei'

import * as canvasStyles from './canvas.module.css'
import PlaneComponent from './shapes/plane'
import SphereComponent from './shapes/sphere'
import BoxComponent from './shapes/box'
import TorusComponent from './shapes/torus'

softShadows()

const R3fCanvas = () => (
  <Canvas
    className={canvasStyles.canvas}
    shadows
    gl={{ alpha: true, precision: 'highp' }}
    camera={{ position: [-5, 2, 10], fov: 60 }}
  >
    <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      position={[2.5, 8, 5]}
      intensity={1.5}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
    />
    <pointLight position={[-10, 0, -20]} color='#8755eb' intensity={2.5} />
    <pointLight position={[0, -10, 0]} intensity={1.5} />
    <group position={[0, -4, 0]}>
      <PlaneComponent />
      <SphereComponent />
      <BoxComponent />
      <TorusComponent />
    </group>
  </Canvas>
)

export default R3fCanvas
