import React, { useRef } from 'react'

import { Icosahedron } from '@react-three/drei'
import { IUniform, Material, Mesh } from 'three'
import { useFrame } from '@react-three/fiber'

import { WebGlTwistShaderMaterial } from './webGlTwistShaderMaterial'

interface MeshWithShaderMaterial extends Mesh {
  material: Material & {
    uniforms: {
      [key: string]: IUniform<number>
    }
  }
}

export const WebGlTwistedSphere = () => {
  const icosahedronRef = useRef<MeshWithShaderMaterial>(null)

  useFrame(({ clock }) => {
    if (icosahedronRef.current) {
      icosahedronRef.current.material.uniforms.uTime.value =
        clock.getElapsedTime() / 2
    }
  })

  return (
    <Icosahedron args={[3, 64]} ref={icosahedronRef}>
      <WebGlTwistShaderMaterial />
    </Icosahedron>
  )
}
