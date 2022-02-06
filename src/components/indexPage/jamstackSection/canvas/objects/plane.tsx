import React from 'react'

const PlaneComponent = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial transparent opacity={0.6} color='#777777' />
      {/* <meshStandardMaterial color='#ffcccc' roughness={0.5} metalness={0.1} /> */}
    </mesh>
  )
}

export default PlaneComponent
