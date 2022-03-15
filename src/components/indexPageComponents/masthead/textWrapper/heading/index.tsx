import React from 'react'

import * as headingStyles from './heading.module.css'

interface Props {
  coloredTitle: string
  title: string
}

export const Heading = ({ coloredTitle, title }: Props) => (
  <h1>
    <span className='visuallyHidden'>
      {coloredTitle} {title}
    </span>
    <svg
      aria-hidden='true'
      viewBox='0 0 975.8027 100'
      xmlns='http://www.w3.org/2000/svg'
    >
      <text x={-5} y={73} className={headingStyles.heading}>
        <tspan className={headingStyles.colored}>{coloredTitle}</tspan> {title}
      </text>
    </svg>
  </h1>
)
