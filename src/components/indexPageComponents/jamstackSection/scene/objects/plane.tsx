import React from 'react'

export const Plane = () => (
  <mesh position={[0, -4, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
    <planeBufferGeometry args={[100, 100]} />
    <shadowMaterial color='#cccccc' opacity={0.6} transparent />
  </mesh>
)
