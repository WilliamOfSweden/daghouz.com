import React, { ComponentProps, useRef } from 'react'

import { useButton } from 'react-aria'

import * as styles from './button.module.css'

interface Props extends Omit<ComponentProps<'button'>, 'children'> {
  buttonText: string
}

export const Button = ({ buttonText, ...restProps }: Props) => {
  const ref = useRef<HTMLButtonElement>(null)
  const buttonAriaProps = useButton({}, ref)

  return (
    <button
      className={styles.btn}
      ref={ref}
      {...buttonAriaProps}
      {...restProps}
    >
      {buttonText}
    </button>
  )
}
