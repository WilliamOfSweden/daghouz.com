import React, { ComponentProps } from 'react'

import * as styles from './button.module.css'

interface Props
  extends Omit<ComponentProps<'button'>, 'children' | 'className'> {
  buttonText: string | null
}

export const Button = ({ buttonText, ...restProps }: Props) => {
  if (!buttonText) return null

  return (
    <button className={styles.btn} {...restProps}>
      {buttonText}
    </button>
  )
}
