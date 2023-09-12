import React, { ComponentProps } from 'react'

import * as styles from './heading1.module.css'

interface Props extends ComponentProps<'h1'> {
  headingText: string
}
export const Heading1 = ({ headingText, ...restProps }: Props) => (
  <h1 className={styles.heading1} {...restProps}>
    {headingText}
  </h1>
)
