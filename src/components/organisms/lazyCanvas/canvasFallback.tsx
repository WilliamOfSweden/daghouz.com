import React from 'react'

import * as styles from './canvas.module.css'

export const CanvasFallback = () => (
  <div aria-hidden='true' className={styles.canvasWrapper} />
)
