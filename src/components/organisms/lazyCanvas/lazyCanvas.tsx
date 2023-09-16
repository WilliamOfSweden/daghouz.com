import React, {
  lazy,
  ReactNode,
  Suspense,
  useLayoutEffect,
  useState,
} from 'react'

import { CanvasFallback } from './canvasFallback'

const Canvas = lazy(() => import('./canvas'))

interface Props {
  children: ReactNode
}

export const LazyCanvas = ({ children }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  /*
  Since ueLayoutEffect will not be called on the server side, a fallback component needs to be returned.
  If instead null is returned, when the app is hydrated, the space that the Canvas component should be occupying will be empty, and the UI will be broken.
  */
  if (typeof window === 'undefined' || !isMounted) return <CanvasFallback />

  return (
    <Suspense fallback={<CanvasFallback />}>
      <Canvas>{children}</Canvas>
    </Suspense>
  )
}
