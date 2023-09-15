import React, { ComponentProps } from 'react'

import * as styles from './canvas.module.css'

export const CanvasFallback = (props: ComponentProps<'canvas'>) => (
  <canvas aria-hidden='true' className={styles.canvas} {...props} />
)
