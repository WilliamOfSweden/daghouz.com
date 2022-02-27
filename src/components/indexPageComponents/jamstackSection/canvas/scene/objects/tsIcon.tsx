import React, { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/ts-icon.glb')

type GLTFResult = GLTF & {
  nodes: {
    Text: THREE.Mesh
    Rounded_Cube_Flat: THREE.Mesh
  }
  materials: {
    ['Matte 5']: THREE.MeshStandardMaterial
    Matte: THREE.MeshStandardMaterial
  }
}

export const TsIcon = ({ ...props }: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/models/ts-icon.glb') as GLTFResult

  return (
    <group
      {...props}
      position={[0, 0, 1]}
      dispose={null}
      ref={group}
      rotation={[Math.PI / -6, 0, 0]}
      scale={5}
    >
      <mesh
        geometry={nodes.Text.geometry}
        material={materials['Matte 5']}
        position={[-0.06, 0.01, 0.015]}
        scale={[1, 1, 2.2]}
      />
      <mesh
        geometry={nodes.Rounded_Cube_Flat.geometry}
        material={materials.Matte}
        position={[0, 0.1, 0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  )
}
