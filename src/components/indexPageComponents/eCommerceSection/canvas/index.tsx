import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react'

import useIsMobile from '../../../../hooks/useIsMobile'
import CanvasFallback from './canvasFallback'
const Canvas = lazy(() => import('./canvas'))

const LazyCanvas = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isMobile = useIsMobile()

  return (
    <Fragment>
      {!isMounted && <CanvasFallback />}
      {!isMounted || isMobile ? null : (
        <Suspense fallback={<CanvasFallback />}>
          <Canvas />
        </Suspense>
      )}
    </Fragment>
  )
}

export default LazyCanvas
