import React, { Fragment } from 'react'

const Lights = () => (
  <Fragment>
    <ambientLight intensity={0.4} />
    <directionalLight intensity={1.5} position={[2.5, 8, 5]} />
    <pointLight color='#3162c3' intensity={2.5} position={[-10, 0, -20]} />
  </Fragment>
)

export default Lights
