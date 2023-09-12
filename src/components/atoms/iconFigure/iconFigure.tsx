import React, { ComponentProps } from 'react'

import * as styles from './iconFigure.module.css'

export interface FeatureItemIconProps
  extends Omit<ComponentProps<'figure'>, 'children'> {
  svgContent: InnerHTML
}

export const IconFigure = ({
  svgContent,
  ...restProps
}: FeatureItemIconProps) => (
  <figure
    className={styles.figure}
    dangerouslySetInnerHTML={{ __html: svgContent.innerHTML }}
    {...restProps}
  />
)
