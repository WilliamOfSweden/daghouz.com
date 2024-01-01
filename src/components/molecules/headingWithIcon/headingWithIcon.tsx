import React from 'react'

import * as styles from './headingWithIcon.module.css'
import { IconFigure } from '@components/atoms/'

export interface HeadingWithIconProps {
  heading: string
  image: {
    svg: {
      content: string
    }
  }
}

export const HeadingWithIcon = ({ heading, image }: HeadingWithIconProps) => (
  <h2 className={styles.h3}>
    <IconFigure svgContent={image.svg.content} />
    {heading}
  </h2>
)
