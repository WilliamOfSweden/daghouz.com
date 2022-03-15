import React, { lazy, ReactNode, Suspense, useEffect, useState } from 'react'

import { useIsMobile } from '../../../../../hooks/'
import { CanvasFallback } from './canvasFallback'

const LazyCanvas = lazy(() => import('./lazyCanvas'))

interface Props {
  children: ReactNode
}

export const Canvas = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isMobile = useIsMobile()

  if (typeof window === 'undefined') return <CanvasFallback />

  if (!isMounted) return <CanvasFallback />

  if (isMobile) return null

  return (
    <Suspense fallback={<CanvasFallback />}>
      <LazyCanvas>{children}</LazyCanvas>
    </Suspense>
  )
}
