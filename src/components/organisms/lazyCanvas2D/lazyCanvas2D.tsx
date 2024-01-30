import React, { lazy, Suspense, useLayoutEffect, useState } from 'react'

import * as styles from './canvas2D.module.css'

const Canvas2D = lazy(() => import('./canvas2D'))

export const LazyCanvas2D = () => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  /*
  Since ueLayoutEffect will not be called on the server side, a fallback component needs to be returned.
  If instead null is returned, when the app is hydrated, the space that the Canvas component should be occupying will be empty, and the UI will be broken.
  */
  if (typeof window === 'undefined' || !isMounted)
    return <canvas className={styles.canvas} />

  return (
    <Suspense fallback={<canvas className={styles.canvas} />}>
      <Canvas2D />
    </Suspense>
  )
}
