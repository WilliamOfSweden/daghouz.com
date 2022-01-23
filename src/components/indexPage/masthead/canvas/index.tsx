import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react'
// import useIsMobile from '../../../../hooks/useIsMobile'

import CanvasFallback from './canvasFallback'
const R3FCanvas = lazy(() => import('./r3fCanvas'))

const Canvas = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // const isMobile = useIsMobile()
  const isMobile = false

  return (
    <Fragment>
      {!isMounted && <CanvasFallback />}
      {!isMounted || isMobile ? null : (
        <Suspense fallback={<CanvasFallback />}>
          <R3FCanvas />
        </Suspense>
      )}
    </Fragment>
  )
}

export default Canvas
