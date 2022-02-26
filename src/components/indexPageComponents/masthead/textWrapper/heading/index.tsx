import React from 'react'

import * as headingStyles from './heading.module.css'

interface Props {
  coloredTitle: string
  title: string
}

const Heading = ({ coloredTitle, title }: Props) => (
  <h1 className={headingStyles.h1}>
    <span className={headingStyles.colored}>{coloredTitle}</span> {title}
  </h1>
)

export default Heading
