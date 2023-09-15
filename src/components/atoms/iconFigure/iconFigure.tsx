import React, { ComponentProps } from 'react'

import * as styles from './iconFigure.module.css'

export interface IconFigureProps
  extends Omit<
    ComponentProps<'figure'>,
    'children' | 'className' | 'dangerouslySetInnerHTML'
  > {
  svgContent: string | undefined
}

export const IconFigure = ({ svgContent, ...restProps }: IconFigureProps) => {
  if (!svgContent) return null

  return (
    <figure
      className={styles.figure}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...restProps}
    />
  )
}
