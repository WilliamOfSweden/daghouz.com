import React, { Fragment, useState, useEffect, Suspense, lazy } from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const R3fCanvas = lazy(() => import('./r3fCanvas'))
import * as canvasStyles from './canvas.module.css'

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
      {/*  Since the canvas, in this case, decidedes the height of the parent component, we need to render a element with the same height, even if it's not mounted, to prevent 'jumping' in the layout. */}
      {!isMounted && <canvas className={canvasStyles.canvas} />}
      {!isMounted ||
        ((typeof window !== 'undefined' &&
          (navigator.connection as Net).saveData) ||
        !matchMedia('(min-width: 768px)').matches ? null : (
          <Suspense fallback={null}>
            <R3fCanvas />
          </Suspense>
        ))}
    </Fragment>
  )
}

export default Canvas
