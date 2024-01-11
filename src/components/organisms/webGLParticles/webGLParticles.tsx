import React, { ComponentProps, useCallback } from 'react'

import { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import Particles from 'react-particles'

import * as styles from './webGLParticles.module.css'

const WebGLParticles = (props: ComponentProps<typeof Particles>) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      aria-hidden='true'
      className={styles.container}
      init={particlesInit}
      options={{
        backgroundMode: {
          enable: false,
        },
        preset: 'fireworks',
        detectRetina: true,
        particles: {
          color: {
            value: '#01c38d',
          },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            width: 0.2,
          },
          move: {
            enable: true,
            outModes: {
              default: 'bounce',
            },
            speed: 0.8,
          },
          number: {
            density: {
              area: 800,
              enable: true,
            },
            value: 80,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { max: 2, min: 1 },
          },
        },
      }}
      {...props}
    />
  )
}

export default WebGLParticles
