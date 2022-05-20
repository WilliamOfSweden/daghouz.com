import React from 'react'

import * as CanvasFallbackStyles from './canvas.module.css'

export const CanvasFallback = () => (
  <div className={`${CanvasFallbackStyles.canvasWrapper} desktop-only`}>
    <canvas />
  </div>
)
