import React, { useState, useEffect, Suspense, lazy } from 'react'

import { useIsMobile } from '../../../../hooks/'
import CanvasFallback from './canvasFallback'
const Canvas = lazy(() => import('./canvas'))

const LazyCanvas = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isMobile = useIsMobile()

  if (isMobile) {
    return null
  }

  if (!isMounted) {
    return <CanvasFallback />
  }

  return (
    <Suspense fallback={<CanvasFallback />}>
      <Canvas />
    </Suspense>
  )
}

export default LazyCanvas
