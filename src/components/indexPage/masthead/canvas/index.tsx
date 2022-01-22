import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react'

import CanvasFallback from './canvasFallback'
const R3FCanvas = lazy(() => import('./r3fCanvas'))

const Canvas = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  interface Net extends NetworkInformation {
    saveData: boolean
  }

  return (
    <Fragment>
      {!isMounted && <CanvasFallback />}
      {!isMounted ||
        ((typeof window !== 'undefined' &&
          (navigator.connection as Net).saveData) ||
        !matchMedia('(min-width: 768px)').matches ? null : (
          <Suspense fallback={<CanvasFallback />}>
            <R3FCanvas />
          </Suspense>
        ))}
    </Fragment>
  )
}

export default Canvas
