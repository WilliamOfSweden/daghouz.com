import React from 'react'

import * as headingStyles from './heading.module.css'

interface Props {
  title: string
}

export const Heading = ({ title }: Props) => (
  <h1 className={headingStyles.h1}>{title}</h1>
)
