import React from 'react'

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <shadowMaterial color='#aaaaaa' opacity={0.6} transparent />
    </mesh>
  )
}

export default Plane
