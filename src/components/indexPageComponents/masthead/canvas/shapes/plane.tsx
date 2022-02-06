import React from 'react'

const Plane = () => (
  <mesh position={[0, -2, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
    <planeBufferGeometry args={[100, 100]} />
    <shadowMaterial color='#cccccc' opacity={0.6} transparent />
  </mesh>
)

export default Plane
