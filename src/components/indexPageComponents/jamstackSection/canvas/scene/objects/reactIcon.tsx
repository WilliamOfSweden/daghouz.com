import React, { useRef } from 'react'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGLTF, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

interface Model extends GLTF {
  nodes?: any
  materials?: any
}

const ReactIcon = () => {
  const { nodes }: Model = useGLTF('/level-react-draco.glb')
  const [matcap] = useMatcapTexture('65A0C7_C3E4F8_A7D5EF_97CAE9', 1024)

  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(state => {
    mesh.current.rotation.x = state.clock.getElapsedTime()
    mesh.current.rotation.y = state.clock.getElapsedTime()
  })

  return (
    <mesh
      castShadow
      geometry={nodes.React.geometry}
      position={[1, 6, -5]}
      ref={mesh}
      scale={12}
    >
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  )
}

useGLTF.preload('/level-react-draco.glb')

export default ReactIcon
