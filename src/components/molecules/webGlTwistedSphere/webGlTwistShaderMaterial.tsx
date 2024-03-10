import React from 'react'

import { ShaderMaterialProps } from '@react-three/fiber'
import { webGlTwistFragmentShader } from './webGlTwistFragmentShader'
import { webGlTwistVertexShader } from './webGlTwistVertexShader'

export const WebGlTwistShaderMaterial = (
  props: Omit<ShaderMaterialProps, 'children'>,
) => (
  <shaderMaterial
    defines={{ PI: Math.PI }}
    fragmentShader={webGlTwistFragmentShader}
    transparent={true}
    uniforms={{
      uAlpha: { value: 1.0 },
      uAmp: { value: 6 },
      uBlue: { value: 0.5412 },
      uFreq: { value: 3 },
      uGreen: { value: 0.7569 },
      uHue: { value: 0.1 },
      uNoiseDensity: { value: 3 },
      uNoiseStrength: { value: 0.1 },
      uOffset: { value: Math.PI * 0.5 },
      uRed: { value: 0.0039 },
      uSpeed: { value: 0.15 },
      uTime: { value: 0 },
    }}
    vertexShader={webGlTwistVertexShader}
    {...props}
  />
)
