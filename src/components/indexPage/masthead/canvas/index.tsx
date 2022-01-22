import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react'

import CanvasFallback from './canvasFallback'
const R3FCanvas = lazy(() => import('./r3fCanvas'))

const Canvas = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Fragment>
      {!isMounted && <CanvasFallback />}
      {!isMounted || !matchMedia('(min-width: 768px)').matches ? null : (
        <Suspense fallback={<CanvasFallback />}>
          <R3FCanvas />
        </Suspense>
      )}
    </Fragment>
  )
}

export default Canvas
