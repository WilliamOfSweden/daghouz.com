import React, { ComponentProps } from 'react'

import * as styles from './iconFigure.module.css'

export interface IconFigureProps
  extends Omit<
    ComponentProps<'figure'>,
    'children' | 'className' | 'dangerouslySetInnerHTML'
  > {
  svgContent: string
}

export const IconFigure = ({ svgContent, ...restProps }: IconFigureProps) => (
  <figure
    className={styles.figure}
    dangerouslySetInnerHTML={{ __html: svgContent }}
    {...restProps}
  />
)
