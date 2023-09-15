import React, {
  lazy,
  ReactNode,
  Suspense,
  useLayoutEffect,
  useState,
} from 'react'

import { CanvasFallback } from './canvasFallback'
import { useIsMobile } from '../../../hooks/'

const Canvas = lazy(() => import('./canvas'))

interface Props {
  children: ReactNode
}

export const LazyCanvas = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  const isMobile = useIsMobile()

  /*
  Since the canvas is not rendered on the server side render, we need to return a fallback component.
  If instead null is returned, when the app is hydrated, the space that the Canvas component should be occupying will be empty, and the UI will be broken.
  */
  if (typeof window === 'undefined') return <CanvasFallback />

  if (!isMounted) return <CanvasFallback />

  if (isMobile) return null

  return (
    <Suspense fallback={<CanvasFallback />}>
      <Canvas>{children}</Canvas>
    </Suspense>
  )
}
