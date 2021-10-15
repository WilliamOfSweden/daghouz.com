import React from 'react'

const PlaneComponent = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.6} color='#000099' />
    </mesh>
  )
}

export default PlaneComponent
