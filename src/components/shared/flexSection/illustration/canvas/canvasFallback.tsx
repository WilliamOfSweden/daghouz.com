import React from 'react'

import * as CanvasFallbackStyles from './canvas.module.css'

export const CanvasFallback = () => (
  <div className={`${CanvasFallbackStyles.outerCanvasWrapper} desktop-only`}>
    <div className={CanvasFallbackStyles.innerCanvasWrapper}>
      <canvas />
    </div>
  </div>
)
