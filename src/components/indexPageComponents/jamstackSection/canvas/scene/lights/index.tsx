import React, { Fragment } from 'react'

const Lights = () => {
  return (
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
        // shadow-mapSize-height={1024}
        // shadow-mapSize-width={1024}
      />
      {/* <pointLight color='#3162c3' intensity={2.5} position={[2, 0, 5]} />
      <pointLight intensity={1.5} position={[0, -10, 0]} /> */}
    </Fragment>
  )
}

export default Lights
