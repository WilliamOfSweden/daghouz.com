import React, { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

useGLTF.preload('/models/rocket.glb')

interface GLTFResult extends GLTF {
  nodes: {
    pCube5_lambert1_0: THREE.Mesh
  }
  materials: {
    lambert1: THREE.MeshStandardMaterial
  }
}

export const Rocket = () => {
  const group = useRef<THREE.Group>()
  const { materials, nodes } = useGLTF('/models/rocket.glb') as GLTFResult

  return (
    <group dispose={null} position={[-1, 0, 8.2]} ref={group} scale={0.05}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            name='pCylinder1'
            position={[-0.4, 6.04, 1.38]}
            rotation={[0, Math.PI / 4, 0]}
            scale={[1.25, 0.58, 1.25]}
          />
          <group
            position={[-0.39, 8.46, 0.27]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.57, 0.02, 0.57]}
          />
          <group
            position={[-2.86, 2.41, -100.1]}
            rotation={[0, -Math.PI / 2, 0]}
          />
          <group
            position={[-0.39, 8.46, 0.27]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[0.57, 0.03, 0.57]}
          />
          <group
            position={[-3.22, 2.86, 2.9]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[1.38, 1, 0.58]}
          />
          <group position={[-3.23, 2.45, 3.62]} scale={[1.07, 2.11, 1.07]} />
          <group position={[-100.1, 0, 0]} />
          <group position={[2.45, 0.14, -0.57]} scale={[0.88, 0.96, 1]} />
          <group
            position={[-0.2, 0.14, 4.84]}
            rotation={[-Math.PI, -1.03, -Math.PI]}
            scale={[0.88, 0.96, 1]}
          />
          <group
            position={[-3.5, 0.14, -0.17]}
            rotation={[-Math.PI, 1.06, -Math.PI]}
            scale={[0.88, 0.96, 1]}
          />
          <mesh
            castShadow
            geometry={nodes.pCube5_lambert1_0.geometry}
            material={materials.lambert1}
          />
        </group>
      </group>
    </group>
  )
}
