import React from 'react'

import * as CanvasFallbackStyles from './canvas.module.css'

const CanvasFallback = () => (
  <div className={`${CanvasFallbackStyles.canvasWrapper}`}>
    <div className={CanvasFallbackStyles.canvas}>
      <canvas />
    </div>
  </div>
)

export default CanvasFallback
