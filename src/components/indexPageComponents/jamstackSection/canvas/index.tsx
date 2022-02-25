import React, { lazy, Suspense, useEffect, useState } from 'react'

import useIsMobile from '../../../../hooks/useIsMobile'
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
