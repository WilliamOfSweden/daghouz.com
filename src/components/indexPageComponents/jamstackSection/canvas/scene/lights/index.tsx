import React, { Fragment } from 'react'

const Lights = () => (
  <Fragment>
    <ambientLight intensity={0.4} />
    <directionalLight
      castShadow
      intensity={1.3}
      position={[3, 5, 3]}
      shadow-camera-bottom={-10}
      shadow-camera-far={5}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
    />
  </Fragment>
)

export default Lights
