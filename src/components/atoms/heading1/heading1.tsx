import React, { ComponentProps } from 'react'

import * as styles from './heading1.module.css'

interface Props extends Omit<ComponentProps<'h1'>, 'children'> {
  headingText: string | null
}

export const Heading1 = ({ headingText, ...restProps }: Props) => (
  <h1 className={styles.heading1} {...restProps}>
    {headingText}
  </h1>
)
