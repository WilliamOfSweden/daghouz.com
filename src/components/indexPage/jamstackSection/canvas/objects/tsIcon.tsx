import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

interface Model extends GLTF {
  nodes?: any
  materials?: any
}

const TsIcon = () => {
  const group = useRef()
  const model: Model = useGLTF('/ts-logo.gltf')

  return (
    <group
      dispose={null}
      ref={group}
      position={[-3, -1.8, 11.5]}
      rotation={[-0.56, 0, 0]}
      scale-x={15}
      scale-y={15}
      scale-z={15}
    >
      <mesh
        castShadow
        geometry={model.nodes.Text.geometry}
        material={model.materials['Matte 2']}
        position={[0.025, 0.02, -0.0035]}
        scale={0.85}
      />
      <mesh
        castShadow
        geometry={model.nodes.Rounded_Cube_Flat.geometry}
        material={model.materials.Matte}
        position={[0.08, 0.1, -0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/ts-logo.gltf')

export default TsIcon
