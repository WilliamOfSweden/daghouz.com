import React, { lazy, Suspense, useLayoutEffect, useState } from 'react'

import * as styles from './webGLParticles.module.css'

const WebGLParticles = lazy(() => import('./webGLParticles'))

export const LazyWebGLParticles = () => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  /*
  Since the component is not rendered on the server side render, we need to return a fallback component.
  If instead null would have is returned, when the app is hydrated, the space that the Canvas component should be occupying will be empty, and the UI will be broken.
  */
  if (typeof window === 'undefined') return <div className={styles.fallback} />

  if (!isMounted) return <div className={styles.fallback} />

  return (
    <Suspense fallback={<div className={styles.fallback} />}>
      <WebGLParticles />
    </Suspense>
  )
}
