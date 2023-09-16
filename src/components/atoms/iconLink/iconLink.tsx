import React, { ComponentProps } from 'react'

import * as styles from './iconLink.module.css'

export interface IconLinkProps
  extends Omit<
    ComponentProps<'a'>,
    'children' | 'className' | 'dangerouslySetInnerHTML'
  > {
  svgContent: string
}

export const IconLink = ({ svgContent, ...restProps }: IconLinkProps) => (
  <a
    className={styles.a}
    dangerouslySetInnerHTML={{ __html: svgContent }}
    {...restProps}
  />
)
