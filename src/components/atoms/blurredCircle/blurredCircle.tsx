import React, { ComponentProps } from 'react'

import * as styles from './blurredCircle.module.css'

export const BlurredCircle = (
  props: Omit<ComponentProps<'svg'>, 'children'>,
) => (
  <svg aria-hidden={true} className={styles.svg} viewBox='0 0 80 80' {...props}>
    <circle cx='40' cy='40' r='40' />
  </svg>
)
