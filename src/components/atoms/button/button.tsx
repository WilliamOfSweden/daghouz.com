import React, { forwardRef, ComponentProps } from 'react'

import * as styles from './button.module.css'

interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'children' | 'className'> {
  buttonText: string | undefined
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ buttonText, ...restProps }, ref) => (
    <button className={styles.btn} ref={ref} {...restProps}>
      {buttonText}
    </button>
  ),
)

Button.displayName = 'Button'
