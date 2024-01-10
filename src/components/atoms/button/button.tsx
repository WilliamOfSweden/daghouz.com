import React, { ComponentProps } from 'react'

import * as styles from './button.module.css'

interface Props
  extends Omit<ComponentProps<'button'>, 'children' | 'className'> {
  buttonText: string | undefined
}

export const Button = ({ buttonText, ...restProps }: Props) => (
  <button className={styles.btn} {...restProps}>
    {buttonText}
  </button>
)
