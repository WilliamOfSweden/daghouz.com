import React, { ComponentProps } from 'react'

import * as styles from './iconLink.module.css'

export interface IconLinkProps
  extends Omit<
    ComponentProps<'a'>,
    'children' | 'className' | 'dangerouslySetInnerHTML'
  > {
  svgContent: string | undefined
}

export const IconLink = ({ svgContent, ...restProps }: IconLinkProps) => {
  if (!svgContent) return null

  return (
    <a
      className={styles.a}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      {...restProps}
    />
  )
}
